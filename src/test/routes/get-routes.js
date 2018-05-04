const get = {
  name: 'user-get',
  version: '1.0.0',
  path: '/get-routes',
  method: 'get',
  handler: (req, reply) => {
    const payload = {
      hello: 'world'
    }
    return reply.send(payload)
  }
}

module.exports = get
