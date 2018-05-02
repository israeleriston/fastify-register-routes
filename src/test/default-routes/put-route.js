const update = {
  name: 'user-update',
  version: '1.0.0',
  path: '/user/:id',
  method: 'put',
  handler: (req, rep) => {
  	console.log('Router UPDATE object')
  }
}

module.exports = update