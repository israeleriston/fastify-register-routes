'use strict'
const { pick, isArray } = require('lodash')
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

const wrapService = route => {
  // const { server, service } = pick(route, ['service', 'server'])
  const { server, service } = route
  if (service) {
    // const inject = service.reduce((acc, cur) => {
    //   return acc[cur]
    // }, {})
    console.log('service inject', service)
    server.decorateRequest('$service', { ...service })
  }
}

/**
 * @method registerRoute
 * @param  {Instance}       server instance
 * @param  {Object}         route  object
 */
const registerRoutes = (server, route) => {
  const { method, path } = route
  const opts = pick(route, ['name', 'version'])
  const handlers = getHandlers(route)
  console.log('route', route)
  wrapService(server, route)

  server[method](path, opts, ...handlers)
}

module.exports = registerRoutes
