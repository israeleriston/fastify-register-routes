'use strict'

const loadRoutesByPath = require('./load-files')
const registerRoutes = require('./register-router')
const displayRoutes = require('./display-routes')
const registerService = require('./register-service')
const { pick } = require('lodash')

/**
 * @method registerRouter
 * @param  {Object}    server
 * @param  {Object}    options
 * @param  {Function}    next
 */
function registerRouter (server, options, next) {
  const opts = pick(options, ['path', 'showTable'])
  const dirname = opts.path
  const showTable = opts.showTable || false

  if (!dirname) {
    return next(new Error('`path` parameter is required to load files'))
  }
  const routes = loadRoutesByPath(dirname, options)

  routes.forEach(route => registerRoutes(server, route))

  registerService(server)

  if (showTable) {
    displayRoutes(routes)
  }
}

module.exports = registerRouter
