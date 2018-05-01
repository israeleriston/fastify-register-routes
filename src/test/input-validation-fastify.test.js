'use strict'

const test = require('ava')

const Fastify = require('fastify')

const path = require('path')

const registerRouter = require('../register-routes-by-path')

const fastify = Fastify()

test('validate fastify data entry ', t => {
	
	const defaultPath = path.join(__dirname, './fastify')
	
	registerRouter(fastify, defaultPath)
	
	t.pass('All Routes registred with success!')
})