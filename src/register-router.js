'use strict'
const { pick, isArray, flatten } = require('lodash')
const wrapMiddleware = require('./wrap-middleware')

const toArray = value => isArray(value) ? value : [value]

/**
 * @method applyWrap
 * @param  {Array<Function>}  handlers array of middlewares
 * @return {Array<Function>}  array of middlewares
 */
const applyWrap = handlers => {
  const last = handlers.pop()
  handlers.push(wrapMiddleware(last))

  return handlers
}

/**
 * @method getHandlers
 * @param  {Object}    route
 * @return {Array<Function>} array of middlewares
 */
const getHandlers = route => {
  const { useWrap } = route
  let handlers = toArray(route.handler)

  if (useWrap) {
    handlers = applyWrap(handlers)
  }

  return handlers
}

/**
 * @method registerRoute
 * @param  {Instance}       server instance
 * @param  {Object}         route  object
 */
const registerRoutes = (server, route) => {
  const { method } = route
  const opts = pick(route, ['path', 'name', 'version'])
  const handlers = () => getHandlers(route)

  server[method](opts, handlers)
}

module.exports = registerRoutes
