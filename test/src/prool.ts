import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'
import { setTimeout } from 'node:timers/promises'
import { defineInstance, toArgs } from 'prool'
import { execa } from 'prool/processes'

type RelayParameters = {
  accountRegistry: string
  endpoint: string
  entrypoint: string
  delegationProxy: string
  feeTokens: string[]
  http?: {
    port?: number | undefined
    metricsPort?: number | undefined
  }
  quoteSecretKey?: string | undefined
  quoteTtl?: number | undefined
  registry?: string | undefined
  secretKey?: string | undefined
  txGasBuffer?: bigint | undefined
  userOpGasBuffer?: bigint | undefined
}

export const poolId =
  Number(process.env.VITEST_POOL_ID ?? 1) *
  Number(process.env.VITEST_SHARD_ID ?? 1) *
  Math.floor(Math.random() * 10000)

export const relay = defineInstance((parameters?: RelayParameters) => {
  const args = (parameters || {}) as RelayParameters
  const {
    endpoint,
    feeTokens,
    secretKey = '0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356', // anvil key
    quoteSecretKey = '0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97', // anvil key
    ...rest
  } = args

  const host = 'localhost'
  const name = 'relay'
  const process_ = execa({ name })
  let port = args.http?.port ?? 9119

  const containerName = crypto.randomUUID()

  return {
    _internal: {
      args,
      get process() {
        return process_._internal.process
      },
    },
    host,
    name,
    port,
    async start({ port: port_ = port }, options) {
      port = port_

      const args_ = [
        '-e',
        `GECKO_API=${process.env.VITE_GECKO_API}`,
        '--name',
        containerName,
        '--network',
        'host',
        '--platform',
        'linux/x86_64',
        '--add-host',
        'host.docker.internal:host-gateway',
        '--add-host',
        'localhost:host-gateway',
        '-p',
        `${port}:${port}`,
        '-v',
        `${resolve(import.meta.dirname, 'registry.toml')}:/app/registry.toml`,
        'ghcr.io/ithacaxyz/relay:latest',
        ...toArgs({
          ...rest,
          endpoint: endpoint?.replaceAll(
            /127\.0\.0\.1|0\.0\.0\.0/g,
            'host.docker.internal',
          ),
          http: {
            metricsPort: port + 1,
            port,
          },
          quoteSecretKey,
          quoteTtl: 30,
          registry: '/app/registry.toml',
          secretKey,
        } satisfies Partial<RelayParameters>),
        ...feeTokens.flatMap((feeToken) => ['--fee-token', feeToken]),
      ]

      return await process_.start(($) => $`docker run ${args_}`, {
        ...options,
        resolver({ process, resolve, reject }) {
          // TODO: remove once relay has feedback on startup.
          setTimeout(3_000).then(resolve)
          process.stdout.on('data', (data) => {
            const message = data.toString()
            if (message.includes('Started relay service')) resolve()
          })
          process.stderr.on('data', (data) => {
            const message = data.toString()
            if (message.includes('WARNING')) return
            reject(data)
          })
        },
      })
    },
    async stop() {
      spawnSync('docker', ['rm', '-f', containerName])
    },
  }
})
