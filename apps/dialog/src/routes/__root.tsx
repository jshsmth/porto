import { Env, UserAgent } from '@porto/apps'
import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'
import { Actions, Hooks } from 'porto/remote'
import * as React from 'react'
import { useAccount } from 'wagmi'

import * as Dialog from '~/lib/Dialog'
import { porto } from '~/lib/Porto'
import LucideGlobe from '~icons/lucide/globe'
import LucideX from '~icons/lucide/x'
import { Layout } from './-components/Layout'
import { UpdateAccount } from './-components/UpdateAccount'

const env = (
  {
    anvil: 'anvil',
    dev: 'development',
    prod: undefined,
    stg: 'staging',
  } satisfies Record<Env.Env, string | undefined>
)[Env.get()]

export const Route = createRootRoute({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        content: __APP_VERSION__,
        name: 'X-App-Version',
      },
    ],
  }),
})
function RouteComponent() {
  React.useEffect(() => {
    // Note: we already call `porto.ready()` optimistically in `main.tsx`, but
    // we should call it here incase it didn't resolve due to a race condition.
    porto.ready()
  }, [])

  // Optimistically fetch account version (populate cache).
  UpdateAccount.useAccountVersion()

  const account = useAccount()
  const mode = Dialog.useStore((state) => state.mode)
  const { domain, subdomain, icon, url } = Dialog.useStore((state) => {
    const hostnameParts = state.referrer?.origin.hostname.split('.').slice(-3)
    const domain = hostnameParts?.slice(-2).join('.')
    const subdomain = hostnameParts?.at(-3)
    return {
      domain,
      icon: state.referrer?.icon,
      subdomain,
      url: state.referrer?.origin.toString(),
    }
  })
  const request = Hooks.useRequest(porto)
  const search = Route.useSearch() as {
    requireUpdatedAccount?: boolean | undefined
  }

  const contentRef = React.useRef<HTMLDivElement | null>(null)
  const titlebarRef = React.useRef<HTMLDivElement | null>(null)

  React.useLayoutEffect(() => {
    const element = contentRef.current
    if (!element) return

    let frameId: number
    let lastHeight: number | undefined

    const resizeObserver = new ResizeObserver((entries) => {
      // cancel any pending animation frame before requesting a new one
      cancelAnimationFrame(frameId)

      frameId = requestAnimationFrame(() => {
        for (const entry of entries) {
          if (!entry) return

          const { height, width } = entry.contentRect
          // Only send resize if height actually changed
          if (height === lastHeight) return

          const titlebarHeight = titlebarRef.current?.clientHeight ?? 0
          const modeHeight =
            mode === 'popup'
              ? UserAgent.isSafari()
                ? 28 // safari: 27px title bar, 1px in borders
                : UserAgent.isFirefox()
                  ? 63 // firefox: 27px title bar, 34px address bar, 2px in borders
                  : 63 // chrome: 27px title bar, 34px address bar, 2px in borders
              : 4
          const totalHeight = height + titlebarHeight + modeHeight

          lastHeight = height

          if (mode === 'popup') {
            window.resizeTo(width, totalHeight)
          } else if (mode === 'iframe' || mode === 'inline-iframe') {
            porto.messenger.send('__internal', {
              height: totalHeight,
              type: 'resize',
            })
          }
        }
      })
    })

    resizeObserver.observe(element)
    return () => {
      // cancel any pending animation frame before disconnecting the observer
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
    }
  }, [mode])

  const id = request?.id ? request.id.toString() : '-1'
  const dataMode = `data-${mode === 'inline-iframe' ? 'iframe' : mode}`

  return (
    <>
      <HeadContent />

      <div
        data-dialog
        {...{ [dataMode]: '' }} // for conditional styling based on dialog mode ("in-data-iframe:..." or "in-data-popup:...")
      >
        <header
          data-element="dialog-header"
          ref={titlebarRef}
          {...{ [dataMode]: '' }}
          className="fixed flex h-navbar w-full items-center justify-between gap-2 in-data-iframe:rounded-t-[14px] border border-primary bg-secondary px-3 pt-2 pb-1.5"
        >
          <div className="flex size-5 items-center justify-center rounded-[5px] bg-gray6">
            {icon ? (
              <div className="p-[3px]">
                <img
                  alt={url}
                  className="size-full text-transparent"
                  src={icon}
                />
              </div>
            ) : (
              <LucideGlobe className="size-3.5 text-primary" />
            )}
          </div>

          <div className="mr-auto flex shrink overflow-hidden whitespace-nowrap font-normal text-[14px] text-secondary">
            <div
              className="mr-auto flex shrink overflow-hidden whitespace-nowrap font-normal text-[14px] text-secondary"
              title={url}
            >
              {subdomain && (
                <>
                  <div className="truncate">{subdomain}</div>
                  <div>.</div>
                </>
              )}
              <div>{domain}</div>
            </div>
            {env && (
              <div className="ms-2 flex h-5 items-center rounded-full bg-surfaceHover px-1.25 text-[11.5px] text-secondary capitalize">
                {env}
              </div>
            )}
          </div>

          {mode !== 'inline-iframe' && (
            <button
              onClick={() => Actions.rejectAll(porto)}
              title="Close Dialog"
              type="button"
            >
              <LucideX className="size-4.5 text-secondary" />
            </button>
          )}
        </header>

        <div
          className="flex not-in-data-popup-standalone:h-fit in-data-popup-standalone:min-h-dvh flex-col overflow-hidden in-data-iframe:rounded-[14px]! in-data-iframe:border border-primary bg-primary pt-titlebar in-data-iframe:max-sm:rounded-b-none"
          ref={contentRef}
        >
          <div
            className="flex flex-grow *:w-full"
            key={id} // rehydrate on id changes
          >
            {account.isConnecting || account.isReconnecting ? (
              <Layout loading loadingTitle="Loading...">
                <div />
              </Layout>
            ) : search.requireUpdatedAccount ? (
              <UpdateAccount.CheckUpdate>
                <Outlet />
              </UpdateAccount.CheckUpdate>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>

      <React.Suspense>
        <TanStackRouterDevtools position="bottom-right" />
        <TanStackQueryDevtools
          buttonPosition="bottom-left"
          initialIsOpen={false}
          position="left"
        />
      </React.Suspense>
    </>
  )
}

const TanStackRouterDevtools =
  import.meta.env.PROD || window !== window.parent || Boolean(window.opener)
    ? () => null
    : React.lazy(() =>
        import('@tanstack/react-router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

const TanStackQueryDevtools =
  import.meta.env.PROD || window !== window.parent || Boolean(window.opener)
    ? () => null
    : React.lazy(() =>
        import('@tanstack/react-query-devtools').then((res) => ({
          default: res.ReactQueryDevtools,
        })),
      )
