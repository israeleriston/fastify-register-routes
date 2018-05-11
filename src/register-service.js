'use strict'

const { pick } = require('lodash')

/**
 * @method registerService
 * @param  {Object}    server
 */
const registerService = server => {
  server.addHook('onRoute', route => {
    const service = pick(route, ['service'])
    if (!service) {
      server.decorateRequest('$service', service)
    }
  })
}

module.exports = registerService
