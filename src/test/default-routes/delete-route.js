const del = {
  name: 'user-delete',
  version: '1.0.0',
  path: '/user/:id',
  method: 'delete',
  handler: (req, rep) => {
  	console.log('Router DELETE object')
  }
}

module.exports = del