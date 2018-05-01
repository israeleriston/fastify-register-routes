
const get = {
  name: 'user-get',
  version: '1.0.0',
  path: '/user/:id',
  method: 'get',
  handler: (req, rep) => {
  	console.log('Router loaded GET')
  }
}

const post = {
  name: 'user-post',
  version: '1.0.0',
  path: '/user',
  method: 'post',
  handler: (req, rep) => {
  	console.log('Router loaded POST')
  }
}

const update = {
  name: 'user-update',
  version: '1.0.0',
  path: '/user/:id',
  method: 'put',
  handler: (req, rep) => {
  	console.log('Router UPDATE object')
  }
}

const del = {
  name: 'user-delete',
  version: '1.0.0',
  path: '/user/:id',
  method: 'delete',
  handler: (req, rep) => {
  	console.log('Router DELETE object')
  }
}



module.exports = [ get, post, update, del ]