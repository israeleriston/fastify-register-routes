'use strict'
const Boom = require('boom')

/**
 * call a middleware
 * @method tryCatch
 * @param  {Function} fn
 * @return {Promise}
 */
const tryCatch = fn => {
  try {
    return Promise.resolve(fn())
  } catch (e) {
    return Promise.reject(e)
  }
}

/**
 * @method sendError
 * @param  {ResponseFastify}  res response instance
 * @param  {Error}            e
 */
const sendError = (res, e) => {
  const output = Boom.boomify(e).output
  res.send(output.statusCode, output)
}

/**
 * @method wrapMiddleware
 * @param  {Function}       middleware route middleware
 * @return {Function}
 */
const wrapMiddleware = middleware => {
  return (req, res) => {
    const handler = () => middleware(req, res)
    tryCatch(handler)
      .then(result => {
        res.send(result)
      })
      .catch(sendError)
  }
}

module.exports = wrapMiddleware
