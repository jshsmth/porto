import * as Json from 'ox/Json'
import * as RpcResponse from 'ox/RpcResponse'

import type { Union } from '@sinclair/typebox/type'
import * as RpcRequest from './request.js'
import { type StaticDecode, type StaticEncode, Type, Value } from './schema.js'

export * from './request.js'

export const Request = Type.Union([
  RpcRequest.eth_accounts.Request,
  RpcRequest.eth_chainId.Request,
  RpcRequest.eth_requestAccounts.Request,
  RpcRequest.eth_sendTransaction.Request,
  RpcRequest.eth_signTypedData_v4.Request,
  RpcRequest.experimental_permissions.Request,
  RpcRequest.experimental_createAccount.Request,
  RpcRequest.experimental_grantPermissions.Request,
  RpcRequest.experimental_prepareCreateAccount.Request,
  RpcRequest.experimental_revokePermissions.Request,
  RpcRequest.personal_sign.Request,
  RpcRequest.porto_ping.Request,
  RpcRequest.wallet_connect.Request,
  RpcRequest.wallet_disconnect.Request,
  RpcRequest.wallet_getCallsStatus.Request,
  RpcRequest.wallet_getCapabilities.Request,
  RpcRequest.wallet_prepareCalls.Request,
  RpcRequest.wallet_sendCalls.Request,
  RpcRequest.wallet_sendPreparedCalls.Request,
])

export function parseRequest(request: unknown): parseRequest.ReturnType {
  const raw = Value.Convert(Request, request)

  const method = RpcRequest[(raw as any).method as keyof typeof RpcRequest]
  if (method) {
    const error = Value.Errors(method.Request, raw).First()
    const message = [
      error?.message,
      '',
      'Path: ' + error?.path.slice(1).replaceAll('/', '.'),
      error?.value && 'Value: ' + Json.stringify(error.value),
    ]
      .filter((x) => typeof x === 'string')
      .join('\n')
    if (error) throw new RpcResponse.InvalidParamsError({ message })
  }

  Value.Assert(Request, raw)
  const _decoded = Value.Decode(Request, raw)

  return {
    ...raw,
    _decoded,
  } as never
}

export declare namespace parseRequest {
  export type ReturnType = typeof Request extends Union<infer U>
    ? {
        [K in keyof U]: StaticEncode<U[K]> & {
          _decoded: StaticDecode<U[K]>
        }
      }[number]
    : never
}
