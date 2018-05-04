'use strict'

const test = require('ava')

const Fastify = require('fastify')

const path = require('path')

const registerRouter = require('../register-routes-by-path')

const fastify = Fastify()

test('validate data entry register routes ', t => {
  const defaultPath = path.join(__dirname, './routes')

  const opts = {
    regex: /((Route)|(Routes))\.js|.mjs$/,
    showTable: true
  }

  registerRouter(fastify, defaultPath, opts)

  fastify.ready(() => console.log('routes -> ', fastify.printRoutes()))
  t.pass()
})
