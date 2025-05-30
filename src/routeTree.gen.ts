/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SubscriptionsImport } from './routes/subscriptions'
import { Route as SearchImport } from './routes/search'
import { Route as PrimeImport } from './routes/prime'
import { Route as DownloadsImport } from './routes/downloads'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SubscriptionsRoute = SubscriptionsImport.update({
  id: '/subscriptions',
  path: '/subscriptions',
  getParentRoute: () => rootRoute,
} as any)

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const PrimeRoute = PrimeImport.update({
  id: '/prime',
  path: '/prime',
  getParentRoute: () => rootRoute,
} as any)

const DownloadsRoute = DownloadsImport.update({
  id: '/downloads',
  path: '/downloads',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
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
    '/downloads': {
      id: '/downloads'
      path: '/downloads'
      fullPath: '/downloads'
      preLoaderRoute: typeof DownloadsImport
      parentRoute: typeof rootRoute
    }
    '/prime': {
      id: '/prime'
      path: '/prime'
      fullPath: '/prime'
      preLoaderRoute: typeof PrimeImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/subscriptions': {
      id: '/subscriptions'
      path: '/subscriptions'
      fullPath: '/subscriptions'
      preLoaderRoute: typeof SubscriptionsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/downloads': typeof DownloadsRoute
  '/prime': typeof PrimeRoute
  '/search': typeof SearchRoute
  '/subscriptions': typeof SubscriptionsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/downloads': typeof DownloadsRoute
  '/prime': typeof PrimeRoute
  '/search': typeof SearchRoute
  '/subscriptions': typeof SubscriptionsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/downloads': typeof DownloadsRoute
  '/prime': typeof PrimeRoute
  '/search': typeof SearchRoute
  '/subscriptions': typeof SubscriptionsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/downloads' | '/prime' | '/search' | '/subscriptions'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/downloads' | '/prime' | '/search' | '/subscriptions'
  id: '__root__' | '/' | '/downloads' | '/prime' | '/search' | '/subscriptions'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DownloadsRoute: typeof DownloadsRoute
  PrimeRoute: typeof PrimeRoute
  SearchRoute: typeof SearchRoute
  SubscriptionsRoute: typeof SubscriptionsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DownloadsRoute: DownloadsRoute,
  PrimeRoute: PrimeRoute,
  SearchRoute: SearchRoute,
  SubscriptionsRoute: SubscriptionsRoute,
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
        "/downloads",
        "/prime",
        "/search",
        "/subscriptions"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/downloads": {
      "filePath": "downloads.tsx"
    },
    "/prime": {
      "filePath": "prime.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/subscriptions": {
      "filePath": "subscriptions.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
