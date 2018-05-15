'use strict'

const { pick } = require('lodash')

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
 * @description Get a current route using onRequest
 * @method getRoute
 * @param  {Array|Route} routes routes of all application
 * @param  {String} url  current url the request
 */
const getRoute = (routes, url) => routes.filter(route => url.includes(route.path))

/**
* @method registerDecorate
* @param {Object|Instance} server
**/
const registerDecorate = (server, routes) => {
  server.addHook('onRequest', (req, reply, next) => {
    const { url } = req
    const route = getRoute(routes, url)

    const services = pick(...route, ['service'])

    if (services) {
      const service = parseService(services)
      server.decorateRequest('$service', service)
    }
    next()
  })
}

/**
 * @method registerService
 * @param  {Object|Instance}    server
 */
const registerService = (server, routes) => {
  registerDecorate(server, routes)
}

module.exports = registerService
