const action01 = () => {
  return 'action03'
}

const action02 = () => {
  return 'action02'
}

const post = {
  name: 'user-post',
  version: '1.0.0',
  path: '/post-route',
  method: 'post',
  service: [ action01, action02 ],
  handler: (req, reply) => {
    const action = req.$service.action02()
    return reply.send({ payload: action })
  }
}

module.exports = post
