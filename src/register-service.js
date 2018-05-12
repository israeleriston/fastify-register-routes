'use strict'

const { pick, isEmpty } = require('lodash')

/**
* @method toParseObject
* @returning {Object}
**/
const toParseObject = (acc, cur, key, list) => {
  acc[cur.name] = cur
  return acc
}

/**
* @method toObject
* @param {Object|Service} service
**/
const toObject = ({ service }) => service.reduce(toParseObject, {})

/**
* @method parseService
* @param {Array|Function} services
**/
const parseService = services => toObject(services)

/**
* @method registerDecorate
* @param {Object|Instance} server
**/
const registerDecorate = server => {
  server.addHook('onRoute', route => {
    const services = pick(route, ['service'])

    if (!isEmpty(services)) {
      const service = parseService(services)
      server.decorateRequest('$service', service)
    }
  })
}

/**
 * @method registerService
 * @param  {Object|Instance}    server
 */
const registerService = server => {
  registerDecorate(server)
}

module.exports = registerService
