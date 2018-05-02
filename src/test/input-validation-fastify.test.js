'use strict'

const test = require('ava')

const Fastify = require('fastify')

const path = require('path')

const registerRouter = require('../register-routes-by-path')

const fastify = Fastify()

test('Validate fastify instance data entry ', t => {
  const defaultPath = path.join(__dirname, './default-routes')

  registerRouter(fastify, defaultPath)

  t.pass('All Routes registred with success!')
})

test('inject get request fastify', async t => {
  const fastify = Fastify()
  const payload = {
    hello: 'world'
  }

  fastify.get('/', (req, reply) => {
    reply.send(payload)
  })

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, res) => {
    if (err) {
      t.throws(err)
    }
    t.deepEqual(payload, JSON.parse(res.payload))
    t.deepEqual(res.statusCode, 200)
    t.deepEqual(res.headers['content-length'], '17')
    t.pass('passing by all tests')
    return res
  })
})

test('inject post request fastify', async t => {
  const fastify = Fastify()
  const payload = {
    hello: 'world'
  }

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.inject({
    method: 'POST',
    url: '/',
    payload: payload
  }, (err, res) => {
    if (err) {
      t.throws(err)
    }
    t.deepEqual(payload, JSON.parse(res.payload))
    t.deepEqual(res.statusCode, 200)
    t.deepEqual(res.headers['content-length'], '17')
    t.pass('passing by all tests')
    return res
  })
})
