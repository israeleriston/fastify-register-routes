'use strict'

const test = require('ava')

const Fastify = require('fastify')

const path = require('path')

const registerRoutes = require('../index.js')

test('validate data entry register routes ', t => {
  const fastify = Fastify()
  const defaultPath = path.join(__dirname, './routes')

  fastify.register(registerRoutes, {
    path: defaultPath
  })

  fastify.ready(() => {})

  t.pass()
})

test('entry options regex filename', t => {
  const fastify = Fastify()
  const defaultPath = path.join(__dirname, './routes')

  fastify.register(registerRoutes, {
    regex: /((Route)|(Routes))\.js|.mjs$/,
    showTable: false,
    path: defaultPath
  })

  t.pass()
})

test('entry options show table is false', t => {
  const fastify = Fastify()
  const defaultPath = path.join(__dirname, './routes')

  fastify.register(registerRoutes, {
    showTable: false,
    path: defaultPath
  })

  t.pass()
})

test('entry options show table is true', t => {
  const fastify = Fastify()
  const defaultPath = path.join(__dirname, './routes')

  fastify.register(registerRoutes, {
    showTable: true,
    path: defaultPath
  })

  t.pass()
})
