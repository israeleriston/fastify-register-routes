# Fastify Register Routes

[![GitHub issues](https://img.shields.io/github/issues/israeleriston/fastify-register-routes.svg)](https://github.com/israeleriston/fastify-register-routes/issues) [![GitHub forks](https://img.shields.io/github/forks/israeleriston/fastify-register-routes.svg)](https://github.com/israeleriston/fastify-register-routes/network) [![GitHub stars](https://img.shields.io/github/stars/israeleriston/fastify-register-routes.svg)](https://github.com/israeleriston/fastify-register-routes/stargazers) [![GitHub license](https://img.shields.io/github/license/israeleriston/fastify-register-routes.svg)](https://github.com/israeleriston/fastify-register-routes/blob/master/LICENSE) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) [![NPM downloads](https://img.shields.io/npm/dm/fastify-register-routes.svg?style=flat)](https://www.npmjs.com/package/fastify-register-routes) [![Build Status](https://travis-ci.org/israeleriston/fastify-register-routes.svg?branch=master)](https://travis-ci.org/israeleriston/fastify-register-routes)
[![Coverage Status](https://coveralls.io/repos/github/israeleriston/fastify-register-routes/badge.svg?branch=master)](https://coveralls.io/github/israeleriston/fastify-register-routes?branch=master)

> fastify register routes (fastify-register-routes) Plugin to automatically load routes from a specified path and optionally limit loaded file names by a regular expression.


## Install

`npm i fastify-register-routes `


## Usage

### Options

* `regex`: You regex to test file name the router Ex.: user-router.js
  if nothing is informed I'll use the regex standard `/((Route)|(Routes)|(route)|(routes))\.js|.mjs$/`.

* `showTable`: After loaded all routes, will showind one table
  with all routes registred's by default value is false.

* `path`: Path is used to reference the directory for reading files, therefore, is `required`.

* `useService`: allowed injecting methods of services inside the fastify `Request` object.
  Accepts as an argument a list of functions, exemple below.

* `schema`: In your routes, you can define the schema, according to the documentation of fastify,
 this parameter is optional, you just need to inform `schema: you-schema`


```js
const path = require('path')
const Fastify = require('fastify')
const registerRoutes = require('fastify-register-routes')

const fastify = Fastify()

// path with your's routes files
const defaultPath = path.join(__dirname, './routes')

fastify.register(registerRoutes, {
  regex: /((Route)|(Routes))\.js|.mjs$/,
  showTable: true,
  path: defaultPath
})

// case need confering routes registred's
// fastify provide an log with the routes loaded
// this function ready é executed after the all is completed loading
fastify.ready().then(() => console.log(fastify.printRoutes()))

fastify.listen(3000, '127.0.0.1', err => {
  if (err) {
    throw  err
  }
  console.log(`Listen ${fastify.address().port}`)
})

```

### Options for Routes

* `useWrap`: use a flag useWrap with value true, is an envelope of handler methods, i see below


```js
module.exports = {
  path: '/some-route',
  handler: wrapMiddleware((req, res) => {
    const usersRepo = req.$repositories.users
    const data = req.body
    return usersRepo.create(data)
      .then(user => ({ data: user }))
  })
}
```

## Options for method's services Injected at routes

```js
const schema = require('./schema')

const action01 = () => {
  // same code here
  return 'action01'
}

const action02 = () => {
  // your logic here!
  return 'action02'
}

const get = {
  name: 'user-get',
  version: '1.0.0',
  path: '/get-route',
  // your scheme here, any questions, consult the documentation of fastify.
  // see other examples [here](https://github.com/fastify/fastify/blob/master/docs/Routes.md)
  schema: schema,
  method: 'get',
  service: [ action01, action02 ],
  handler: (req, reply) => {
    const action = req.$service.action01()
    return reply.send({ payload: action })
  }
}

```
## Other Examples using services injections.

```js
 // middleware.js file
 // don't you import much services methods within you logic,
 // you will only need inject on http-route, its file the routes.

const createUser = (req, reply) => {
  const userNews = req.$service.createUser(req.body)
  // Wow! it's simple!
}


// service.js
// example of service
const createUser = (user) => User.create(user)



// route.js
// example of uses


const userRoute = {
  name: 'user-create',
  version: '1.2.1',
  path: '/user-create',
  method: 'post',
  service: [ createUser ],
  handler: middleware.createUser
}
```

## disclaimer
any error can be reported, as issue and I am accepting PR's :)
