'use strict'
const loadRoutesByPath = require('./load-files')
const registerRoutes = require('./register-router')
// const displayRoutes = require('./display-routes')
const registerRouter = (server, dirname, ...opts) => {
  const routes = loadRoutesByPath(dirname)

  routes.forEach(route => registerRoutes(server, route))

// displayRoutes(routes)
}

module.exports = registerRouter
