const get = {
  name: 'user-delete',
  version: '1.0.0',
  path: '/delete-route',
  method: 'delete',
  handler: (req, reply) => {
    const payload = {
      hello: 'world'
    }
    return reply.send(payload)
  }
}

module.exports = get
