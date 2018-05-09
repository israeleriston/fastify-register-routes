const test = require('ava')
const Fastify = require('fastify')
const registerRoutes = require('../index.js')
const path = require('path')

test('entry options for injecting array the services ', t => {
  const fastify = Fastify()
  const defaultPath = path.join(__dirname, './routes-service')

  fastify.register(registerRoutes, {
    showTable: true,
    path: defaultPath
  })

  t.pass()
})
