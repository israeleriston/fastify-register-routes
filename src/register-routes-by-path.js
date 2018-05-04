'use strict'
const loadRoutesByPath = require('./load-files')
const registerRoutes = require('./register-router')
const displayRoutes = require('./display-routes')
const { isUndefined } = require('lodash')
const isShowTable = opts => !isUndefined(opts && opts.showTable) ? opts.showTable : false
const registerRouter = (server, dirname, opts) => {
  const routes = loadRoutesByPath(dirname, opts)

  routes.forEach(route => registerRoutes(server, route))

  if (isShowTable(opts)) {
    displayRoutes(routes)
  }
}

module.exports = registerRouter
