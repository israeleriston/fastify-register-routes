const get = {
  name: 'user-put',
  version: '1.0.0',
  path: '/put-routes',
  method: 'put',
  handler: (req, reply) => {
    const payload = {
      hello: 'world'
    }
    return reply.send(payload)
  }
}

module.exports = get
