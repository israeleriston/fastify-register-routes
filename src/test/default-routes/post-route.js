const post = {
  name: 'user-post',
  version: '1.0.0',
  path: '/user',
  method: 'post',
  handler: (req, rep) => {
  	console.log('Router loaded POST')
  }
}

module.exports = post