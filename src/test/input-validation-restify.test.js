'use strict'

const test = require('ava')

const path = require('path')

const Restify = require('restify')

const registerRouter = require('../register-routes-by-path')

const restify = Restify.createServer()

test('Validate restify instance data entry', t => {
	const defaultPath = path.join(__dirname, './default-routes')
	registerRouter(restify, defaultPath)

	t.pass('All Routes registred with success!')
})
