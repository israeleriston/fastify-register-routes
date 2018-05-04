const fp = require('fastify-plugin')
const registerRouter = require('./register-routes-by-path')

function registerRoutes (instance, options, next) {
  registerRouter(instance, options, next)
  next()
}

module.exports = fp(registerRoutes, {
  fastify: '>=1.0.0',
  name: 'fastify-register-routes'
})
