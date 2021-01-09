
import { atom, selector } from 'recoil'
import hash from 'md5'

import { routes } from './routes'

export const createRoute = (path = routes.home, state = null) => {
  const route = {
    path,
    state
  }

  route._id = hashRoute(route)

  return route
}

const compareRoutes = (a, b) => {
  return a._id === b._id
}

const hashRoute = route => {
  return hash(JSON.stringify(route))
}

const navigationStack = [
  createRoute(routes.home)
]

export const routeStack = atom({
  key: 'app::route',
  default: navigationStack
})

export const getRoute = selector({
  key: 'app::route::get',
  get: ({ get }) => {
    const stack = get(routeStack)
    return stack[0]
  }
})

export const pushRoute = selector({
  key: 'app::route::push',
  set: ({ set, get }, route) => {
    if (typeof route === 'string') {
      route = {
        path: route,
        state: null
      }

      route._id = hashRoute(route)
    }

    if (!route._id) {
      console.warn('Route supplied without id, attempting to generate one.')
      route._id = hashRoute(route)
    }

    const stack = get(routeStack)
    const current = stack[0]

    // Bail if the current route is already at the head of the stack
    if (compareRoutes(route, current)) {
      return
    }

    set(routeStack, [
      route,
      ...stack
    ])
  }
})

export const popRoute = selector({
  key: 'app::route::pop',
  set: ({ set, get }) => {
    const stack = get(routeStack)

    if (stack.length <= 0) {
      return
    }

    const [, ...rest] = stack
    set(routeStack, rest)
  }
})
