/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as DialogIndexImport } from './routes/dialog/index'
import { Route as DialogWalletsendCallsImport } from './routes/dialog/wallet_sendCalls'
import { Route as DialogWalletconnectImport } from './routes/dialog/wallet_connect'
import { Route as DialogPersonalsignImport } from './routes/dialog/personal_sign'
import { Route as DialogExperimentalrevokeAdminImport } from './routes/dialog/experimental_revokeAdmin'
import { Route as DialogExperimentalgrantPermissionsImport } from './routes/dialog/experimental_grantPermissions'
import { Route as DialogExperimentalgrantAdminImport } from './routes/dialog/experimental_grantAdmin'
import { Route as DialogExperimentalcreateAccountImport } from './routes/dialog/experimental_createAccount'
import { Route as DialogExperimentaladdFundsImport } from './routes/dialog/experimental_addFunds'
import { Route as DialogEthsendTransactionImport } from './routes/dialog/eth_sendTransaction'
import { Route as DialogEthrequestAccountsImport } from './routes/dialog/eth_requestAccounts'
import { Route as DialogSplatImport } from './routes/dialog/$'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DialogIndexRoute = DialogIndexImport.update({
  id: '/dialog/',
  path: '/dialog/',
  getParentRoute: () => rootRoute,
} as any)

const DialogWalletsendCallsRoute = DialogWalletsendCallsImport.update({
  id: '/dialog/wallet_sendCalls',
  path: '/dialog/wallet_sendCalls',
  getParentRoute: () => rootRoute,
} as any)

const DialogWalletconnectRoute = DialogWalletconnectImport.update({
  id: '/dialog/wallet_connect',
  path: '/dialog/wallet_connect',
  getParentRoute: () => rootRoute,
} as any)

const DialogPersonalsignRoute = DialogPersonalsignImport.update({
  id: '/dialog/personal_sign',
  path: '/dialog/personal_sign',
  getParentRoute: () => rootRoute,
} as any)

const DialogExperimentalrevokeAdminRoute =
  DialogExperimentalrevokeAdminImport.update({
    id: '/dialog/experimental_revokeAdmin',
    path: '/dialog/experimental_revokeAdmin',
    getParentRoute: () => rootRoute,
  } as any)

const DialogExperimentalgrantPermissionsRoute =
  DialogExperimentalgrantPermissionsImport.update({
    id: '/dialog/experimental_grantPermissions',
    path: '/dialog/experimental_grantPermissions',
    getParentRoute: () => rootRoute,
  } as any)

const DialogExperimentalgrantAdminRoute =
  DialogExperimentalgrantAdminImport.update({
    id: '/dialog/experimental_grantAdmin',
    path: '/dialog/experimental_grantAdmin',
    getParentRoute: () => rootRoute,
  } as any)

const DialogExperimentalcreateAccountRoute =
  DialogExperimentalcreateAccountImport.update({
    id: '/dialog/experimental_createAccount',
    path: '/dialog/experimental_createAccount',
    getParentRoute: () => rootRoute,
  } as any)

const DialogExperimentaladdFundsRoute = DialogExperimentaladdFundsImport.update(
  {
    id: '/dialog/experimental_addFunds',
    path: '/dialog/experimental_addFunds',
    getParentRoute: () => rootRoute,
  } as any,
)

const DialogEthsendTransactionRoute = DialogEthsendTransactionImport.update({
  id: '/dialog/eth_sendTransaction',
  path: '/dialog/eth_sendTransaction',
  getParentRoute: () => rootRoute,
} as any)

const DialogEthrequestAccountsRoute = DialogEthrequestAccountsImport.update({
  id: '/dialog/eth_requestAccounts',
  path: '/dialog/eth_requestAccounts',
  getParentRoute: () => rootRoute,
} as any)

const DialogSplatRoute = DialogSplatImport.update({
  id: '/dialog/$',
  path: '/dialog/$',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dialog/$': {
      id: '/dialog/$'
      path: '/dialog/$'
      fullPath: '/dialog/$'
      preLoaderRoute: typeof DialogSplatImport
      parentRoute: typeof rootRoute
    }
    '/dialog/eth_requestAccounts': {
      id: '/dialog/eth_requestAccounts'
      path: '/dialog/eth_requestAccounts'
      fullPath: '/dialog/eth_requestAccounts'
      preLoaderRoute: typeof DialogEthrequestAccountsImport
      parentRoute: typeof rootRoute
    }
    '/dialog/eth_sendTransaction': {
      id: '/dialog/eth_sendTransaction'
      path: '/dialog/eth_sendTransaction'
      fullPath: '/dialog/eth_sendTransaction'
      preLoaderRoute: typeof DialogEthsendTransactionImport
      parentRoute: typeof rootRoute
    }
    '/dialog/experimental_addFunds': {
      id: '/dialog/experimental_addFunds'
      path: '/dialog/experimental_addFunds'
      fullPath: '/dialog/experimental_addFunds'
      preLoaderRoute: typeof DialogExperimentaladdFundsImport
      parentRoute: typeof rootRoute
    }
    '/dialog/experimental_createAccount': {
      id: '/dialog/experimental_createAccount'
      path: '/dialog/experimental_createAccount'
      fullPath: '/dialog/experimental_createAccount'
      preLoaderRoute: typeof DialogExperimentalcreateAccountImport
      parentRoute: typeof rootRoute
    }
    '/dialog/experimental_grantAdmin': {
      id: '/dialog/experimental_grantAdmin'
      path: '/dialog/experimental_grantAdmin'
      fullPath: '/dialog/experimental_grantAdmin'
      preLoaderRoute: typeof DialogExperimentalgrantAdminImport
      parentRoute: typeof rootRoute
    }
    '/dialog/experimental_grantPermissions': {
      id: '/dialog/experimental_grantPermissions'
      path: '/dialog/experimental_grantPermissions'
      fullPath: '/dialog/experimental_grantPermissions'
      preLoaderRoute: typeof DialogExperimentalgrantPermissionsImport
      parentRoute: typeof rootRoute
    }
    '/dialog/experimental_revokeAdmin': {
      id: '/dialog/experimental_revokeAdmin'
      path: '/dialog/experimental_revokeAdmin'
      fullPath: '/dialog/experimental_revokeAdmin'
      preLoaderRoute: typeof DialogExperimentalrevokeAdminImport
      parentRoute: typeof rootRoute
    }
    '/dialog/personal_sign': {
      id: '/dialog/personal_sign'
      path: '/dialog/personal_sign'
      fullPath: '/dialog/personal_sign'
      preLoaderRoute: typeof DialogPersonalsignImport
      parentRoute: typeof rootRoute
    }
    '/dialog/wallet_connect': {
      id: '/dialog/wallet_connect'
      path: '/dialog/wallet_connect'
      fullPath: '/dialog/wallet_connect'
      preLoaderRoute: typeof DialogWalletconnectImport
      parentRoute: typeof rootRoute
    }
    '/dialog/wallet_sendCalls': {
      id: '/dialog/wallet_sendCalls'
      path: '/dialog/wallet_sendCalls'
      fullPath: '/dialog/wallet_sendCalls'
      preLoaderRoute: typeof DialogWalletsendCallsImport
      parentRoute: typeof rootRoute
    }
    '/dialog/': {
      id: '/dialog/'
      path: '/dialog'
      fullPath: '/dialog'
      preLoaderRoute: typeof DialogIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dialog/$': typeof DialogSplatRoute
  '/dialog/eth_requestAccounts': typeof DialogEthrequestAccountsRoute
  '/dialog/eth_sendTransaction': typeof DialogEthsendTransactionRoute
  '/dialog/experimental_addFunds': typeof DialogExperimentaladdFundsRoute
  '/dialog/experimental_createAccount': typeof DialogExperimentalcreateAccountRoute
  '/dialog/experimental_grantAdmin': typeof DialogExperimentalgrantAdminRoute
  '/dialog/experimental_grantPermissions': typeof DialogExperimentalgrantPermissionsRoute
  '/dialog/experimental_revokeAdmin': typeof DialogExperimentalrevokeAdminRoute
  '/dialog/personal_sign': typeof DialogPersonalsignRoute
  '/dialog/wallet_connect': typeof DialogWalletconnectRoute
  '/dialog/wallet_sendCalls': typeof DialogWalletsendCallsRoute
  '/dialog': typeof DialogIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dialog/$': typeof DialogSplatRoute
  '/dialog/eth_requestAccounts': typeof DialogEthrequestAccountsRoute
  '/dialog/eth_sendTransaction': typeof DialogEthsendTransactionRoute
  '/dialog/experimental_addFunds': typeof DialogExperimentaladdFundsRoute
  '/dialog/experimental_createAccount': typeof DialogExperimentalcreateAccountRoute
  '/dialog/experimental_grantAdmin': typeof DialogExperimentalgrantAdminRoute
  '/dialog/experimental_grantPermissions': typeof DialogExperimentalgrantPermissionsRoute
  '/dialog/experimental_revokeAdmin': typeof DialogExperimentalrevokeAdminRoute
  '/dialog/personal_sign': typeof DialogPersonalsignRoute
  '/dialog/wallet_connect': typeof DialogWalletconnectRoute
  '/dialog/wallet_sendCalls': typeof DialogWalletsendCallsRoute
  '/dialog': typeof DialogIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dialog/$': typeof DialogSplatRoute
  '/dialog/eth_requestAccounts': typeof DialogEthrequestAccountsRoute
  '/dialog/eth_sendTransaction': typeof DialogEthsendTransactionRoute
  '/dialog/experimental_addFunds': typeof DialogExperimentaladdFundsRoute
  '/dialog/experimental_createAccount': typeof DialogExperimentalcreateAccountRoute
  '/dialog/experimental_grantAdmin': typeof DialogExperimentalgrantAdminRoute
  '/dialog/experimental_grantPermissions': typeof DialogExperimentalgrantPermissionsRoute
  '/dialog/experimental_revokeAdmin': typeof DialogExperimentalrevokeAdminRoute
  '/dialog/personal_sign': typeof DialogPersonalsignRoute
  '/dialog/wallet_connect': typeof DialogWalletconnectRoute
  '/dialog/wallet_sendCalls': typeof DialogWalletsendCallsRoute
  '/dialog/': typeof DialogIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dialog/$'
    | '/dialog/eth_requestAccounts'
    | '/dialog/eth_sendTransaction'
    | '/dialog/experimental_addFunds'
    | '/dialog/experimental_createAccount'
    | '/dialog/experimental_grantAdmin'
    | '/dialog/experimental_grantPermissions'
    | '/dialog/experimental_revokeAdmin'
    | '/dialog/personal_sign'
    | '/dialog/wallet_connect'
    | '/dialog/wallet_sendCalls'
    | '/dialog'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/dialog/$'
    | '/dialog/eth_requestAccounts'
    | '/dialog/eth_sendTransaction'
    | '/dialog/experimental_addFunds'
    | '/dialog/experimental_createAccount'
    | '/dialog/experimental_grantAdmin'
    | '/dialog/experimental_grantPermissions'
    | '/dialog/experimental_revokeAdmin'
    | '/dialog/personal_sign'
    | '/dialog/wallet_connect'
    | '/dialog/wallet_sendCalls'
    | '/dialog'
  id:
    | '__root__'
    | '/'
    | '/dialog/$'
    | '/dialog/eth_requestAccounts'
    | '/dialog/eth_sendTransaction'
    | '/dialog/experimental_addFunds'
    | '/dialog/experimental_createAccount'
    | '/dialog/experimental_grantAdmin'
    | '/dialog/experimental_grantPermissions'
    | '/dialog/experimental_revokeAdmin'
    | '/dialog/personal_sign'
    | '/dialog/wallet_connect'
    | '/dialog/wallet_sendCalls'
    | '/dialog/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DialogSplatRoute: typeof DialogSplatRoute
  DialogEthrequestAccountsRoute: typeof DialogEthrequestAccountsRoute
  DialogEthsendTransactionRoute: typeof DialogEthsendTransactionRoute
  DialogExperimentaladdFundsRoute: typeof DialogExperimentaladdFundsRoute
  DialogExperimentalcreateAccountRoute: typeof DialogExperimentalcreateAccountRoute
  DialogExperimentalgrantAdminRoute: typeof DialogExperimentalgrantAdminRoute
  DialogExperimentalgrantPermissionsRoute: typeof DialogExperimentalgrantPermissionsRoute
  DialogExperimentalrevokeAdminRoute: typeof DialogExperimentalrevokeAdminRoute
  DialogPersonalsignRoute: typeof DialogPersonalsignRoute
  DialogWalletconnectRoute: typeof DialogWalletconnectRoute
  DialogWalletsendCallsRoute: typeof DialogWalletsendCallsRoute
  DialogIndexRoute: typeof DialogIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DialogSplatRoute: DialogSplatRoute,
  DialogEthrequestAccountsRoute: DialogEthrequestAccountsRoute,
  DialogEthsendTransactionRoute: DialogEthsendTransactionRoute,
  DialogExperimentaladdFundsRoute: DialogExperimentaladdFundsRoute,
  DialogExperimentalcreateAccountRoute: DialogExperimentalcreateAccountRoute,
  DialogExperimentalgrantAdminRoute: DialogExperimentalgrantAdminRoute,
  DialogExperimentalgrantPermissionsRoute:
    DialogExperimentalgrantPermissionsRoute,
  DialogExperimentalrevokeAdminRoute: DialogExperimentalrevokeAdminRoute,
  DialogPersonalsignRoute: DialogPersonalsignRoute,
  DialogWalletconnectRoute: DialogWalletconnectRoute,
  DialogWalletsendCallsRoute: DialogWalletsendCallsRoute,
  DialogIndexRoute: DialogIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dialog/$",
        "/dialog/eth_requestAccounts",
        "/dialog/eth_sendTransaction",
        "/dialog/experimental_addFunds",
        "/dialog/experimental_createAccount",
        "/dialog/experimental_grantAdmin",
        "/dialog/experimental_grantPermissions",
        "/dialog/experimental_revokeAdmin",
        "/dialog/personal_sign",
        "/dialog/wallet_connect",
        "/dialog/wallet_sendCalls",
        "/dialog/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dialog/$": {
      "filePath": "dialog/$.tsx"
    },
    "/dialog/eth_requestAccounts": {
      "filePath": "dialog/eth_requestAccounts.tsx"
    },
    "/dialog/eth_sendTransaction": {
      "filePath": "dialog/eth_sendTransaction.tsx"
    },
    "/dialog/experimental_addFunds": {
      "filePath": "dialog/experimental_addFunds.tsx"
    },
    "/dialog/experimental_createAccount": {
      "filePath": "dialog/experimental_createAccount.tsx"
    },
    "/dialog/experimental_grantAdmin": {
      "filePath": "dialog/experimental_grantAdmin.tsx"
    },
    "/dialog/experimental_grantPermissions": {
      "filePath": "dialog/experimental_grantPermissions.tsx"
    },
    "/dialog/experimental_revokeAdmin": {
      "filePath": "dialog/experimental_revokeAdmin.tsx"
    },
    "/dialog/personal_sign": {
      "filePath": "dialog/personal_sign.tsx"
    },
    "/dialog/wallet_connect": {
      "filePath": "dialog/wallet_connect.tsx"
    },
    "/dialog/wallet_sendCalls": {
      "filePath": "dialog/wallet_sendCalls.tsx"
    },
    "/dialog/": {
      "filePath": "dialog/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
