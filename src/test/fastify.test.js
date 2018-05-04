'use strict'

const test = require('ava')

const Fastify = require('fastify')

const path = require('path')

const registerRouter = require('../register-routes-by-path')

test('validate data entry register routes ', t => {
  const fastify = Fastify()
  const defaultPath = path.join(__dirname, './routes')

  registerRouter(fastify, defaultPath)

  t.pass()
})

test('entry options regex filename', t => {
  const fastify = Fastify()
  const defaultPath = path.join(__dirname, './routes')

  const opts = {
    regex: /((Route)|(Routes))\.js|.mjs$/,
    showTable: false
  }

  registerRouter(fastify, defaultPath, opts)

  t.pass()
})

test('entry options show table is false', t => {
  const fastify = Fastify()
  const defaultPath = path.join(__dirname, './routes')

  const opts = {
    showTable: false
  }

  registerRouter(fastify, defaultPath, opts)

  t.pass()
})

test('entry options show table is true', t => {
  const fastify = Fastify()
  const defaultPath = path.join(__dirname, './routes')

  const opts = {
    showTable: true
  }

  registerRouter(fastify, defaultPath, opts)

  t.pass()
})
