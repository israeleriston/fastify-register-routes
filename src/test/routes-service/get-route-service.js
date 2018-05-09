const action01 = () => {
  console.log('action 01')
}

const action02 = () => {
  console.log('action 01')
}

const get = {
  name: 'user-get',
  version: '1.0.0',
  path: '/get-route',
  method: 'get',
  service: [ action01, action02 ],
  handler: (req, reply) => {
    const payload = {
      hello: 'world'
    }
    return reply.send(payload)
  }
}

module.exports = get
