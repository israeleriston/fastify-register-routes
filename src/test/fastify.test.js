'use strict'

const test = require('ava')

const Fastify = require('fastify')

const path = require('path')

const registerRouter = require('../register-routes-by-path')

const fastify = Fastify()

test('validate data entry register routes ', t => {
  const defaultPath = path.join(__dirname, './default-routes')

  registerRouter(fastify, defaultPath)

  t.pass('All Routes registred with success!')
})

test('inject GET `/` request ', async t => {
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

test('inject POST `/` request ', async t => {
  t.plan(3)
  const fastify = Fastify()
  const payload = {
    hello: 'world'
  }

  fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  const res = await fastify.inject({
    method: 'POST',
    url: '/',
    payload: payload
  })
  t.deepEqual(payload, JSON.parse(res.payload))
  t.deepEqual(res.statusCode, 200)
  t.deepEqual(res.headers['content-length'], '17')
})

test('inject PUT `/` request', async t => {
  t.plan(3)
  const fastify = Fastify()
  const payload = {
    hello: 'world'
  }

  fastify.put('/:hello', (req, reply) => {
    reply.send(req.body.hello)
  })

  const res = await fastify.inject({
    method: 'PUT',
    url: '/:hello',
    payload: payload
  })
  t.deepEqual(payload.hello, res.payload)
  t.deepEqual(res.statusCode, 200)
  t.deepEqual(res.headers['content-length'], '5')
})

test('inject DELETE `/` request', async t => {
  t.plan(3)
  const fastify = Fastify()
  const payload = {
    hello: 'world'
  }

  fastify.delete('/:hello', (req, reply) => {
    reply.send(req.body.hello)
  })

  const res = await fastify.inject({
    method: 'DELETE',
    url: '/:hello',
    payload: payload
  })
  t.deepEqual(payload.hello, res.payload)
  t.deepEqual(res.statusCode, 200)
  t.deepEqual(res.headers['content-length'], '5')
})
