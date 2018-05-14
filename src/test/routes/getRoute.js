const action01 = () => {
  return 'action01'
}

const action02 = () => {
  return 'action02'
}

const get = {
  name: 'user-get',
  version: '1.0.0',
  path: '/get-route',
  method: 'get',
  service: [ action01, action02 ],
  handler: (req, reply) => {
    const action = req.$service.action01()
    return reply.send({ payload: action })
  }
}

module.exports = get
