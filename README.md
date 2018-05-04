# Fastify Register Routes
> fastify register routes (fastify-register-routes) is a simple plugin that contains an scheme the auto-loading file, auto registration the routes and a wrap handler to a router. And following with packages that are using day-to-day to developing the api, whats that's Boom, Lodash and table (to showing an table within with all routes registred's)


## Install

`npm i fastify-register-routes `


## Usage

### Options

* `regex`: You regex to test file name the router Ex.: user-router.js
  if nothing is informed I'll use the regex standard `/((Route)|(Routes)|(route)|(routes))\.js|.mjs$/`.

* `showTable`: After loaded all routes, will showind one table
  with all routes registred's by default value is false.

* `path`: Path is used to reference the directory for reading files, therefore, is `required.


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

## disclaimer
any error can be reported, as issue and I am accepting PR's :)
