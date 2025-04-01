import * as Provider from 'ox/Provider'
import * as RpcResponse from 'ox/RpcResponse'

import type * as Porto from '../core/Porto.js'
import type * as Remote from './Porto.js'

/**
 * Action to reject an RPC request.
 *
 * @param porto - Porto instance.
 * @param request - Request to reject.
 * @param error - Error to reject with.
 */
export async function reject(
  porto: Pick<Remote.Porto<any>, 'messenger'>,
  request: Porto.QueuedRequest['request'],
  error?: RpcResponse.BaseError | undefined,
) {
  const error_ = error ?? new Provider.UserRejectedRequestError()
  const { messenger } = porto
  messenger.send(
    'rpc-response',
    Object.assign(
      RpcResponse.from({
        error: {
          code: error_.code,
          message: error_.message,
        },
        id: request.id,
        jsonrpc: '2.0',
      }),
      {
        _request: request,
      },
    ),
  )
}

/**
 * Action to reject all RPC requests.
 *
 * @param porto - Porto instance.
 * @param error - Error to reject with.
 */
export async function rejectAll(
  porto: Pick<Remote.Porto<any>, 'messenger' | '_internal'>,
  error?: RpcResponse.BaseError | undefined,
) {
  const { _internal } = porto
  const requests = _internal.remoteStore.getState().requests
  for (const request of requests) await reject(porto, request.request, error)
}

/**
 * Action to respond to an RPC request.
 *
 * @param porto - Porto instance.
 * @param request - Request to respond to.
 */
export async function respond<result>(
  porto: Pick<Remote.Porto<any>, 'messenger' | 'provider'>,
  request: Porto.QueuedRequest['request'],
  options?: {
    selector?: (result: result) => unknown
  },
) {
  const { messenger, provider } = porto
  const { selector } = options ?? {}
  const shared = {
    id: request.id,
    jsonrpc: '2.0',
  } as const
  try {
    let result = await provider.request(request)
    if (selector) result = selector(result as never)
    messenger.send(
      'rpc-response',
      Object.assign(RpcResponse.from({ ...shared, result }), {
        _request: request,
      }),
    )
  } catch (e) {
    const error = e as RpcResponse.BaseError
    messenger.send(
      'rpc-response',
      Object.assign(RpcResponse.from({ ...shared, error, status: 'error' }), {
        _request: request,
      }),
    )
    throw error
  }
}
