'use strict'

const test = require('ava')

const Fastify = require('fastify')

const path = require('path')

const registerRoutes = require('../index')

test('test of inject service using req.$service', async t => {
  const fastify = Fastify()
  const defaultPath = path.join(__dirname, './routes')

  fastify.register(registerRoutes, {
    showTable: false,
    path: defaultPath,
    useService: true
  })

  await fastify.inject({
    method: 'GET',
    url: '/get-route'
  }).then(res => {
    t.deepEqual(res.statusCode, 200)
    t.deepEqual(JSON.parse(res.payload), { payload: 'action01' })
    t.pass()
  }).catch(err => {
    console.log('err', err)
    t.throws(err)
  })
})
