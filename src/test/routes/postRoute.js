const get = {
  name: 'user-post',
  version: '1.0.0',
  path: '/post-route',
  method: 'post',
  handler: (req, reply) => {
    const payload = {
      hello: 'world'
    }
    return reply.send(payload)
  }
}

module.exports = get
