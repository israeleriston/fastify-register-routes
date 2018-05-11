'use strict'
const loadRoutesByPath = require('./load-files')
const registerRoutes = require('./register-router')
const displayRoutes = require('./display-routes')
const registerService = require('./register-service')
const { isUndefined } = require('lodash')

function registerRouter (server, options, next) {
  const dirname = options.path
  if (isUndefined(dirname)) {
    return next(new Error('`path` parameter is required to load files'))
  }
  const routes = loadRoutesByPath(dirname, options)

  routes.forEach(route => registerRoutes(server, route))

  registerService(server)

  if (!isUndefined(options.showTable) && options.showTable) {
    displayRoutes(routes)
  }
}

module.exports = registerRouter
