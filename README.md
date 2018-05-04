# Fastify Register Routes
> fastify register routes (fastify-register-routes) is a simple plugin that contains an scheme the auto-loading file, auto registration the routes and a wrap handler to a router. And following with packages that are using day-to-day to developing the api, whats that's Boom, Lodash and table (to showing an table within with all routes registred's)


## How to install

`npm i fastify-register-routes --save`


## How do use

### Options

* `regex`: You regex to test file name the router Ex.: user-router.js
  if nothing is informed I'll use the standard `/((Route)|(Routes)|(route)|(routes))\.js|.mjs$/`

* `showTable`: After loaded all routes, will showind one table
  with all routes registred's by default value is false

```js
const path = require('path')
const Fastify = require('fastify')
const registerRoutes = require('fastify-register-routes')

const fastify = Fastify()

const opts = {
  regex: /((Route)|(Routes))\.js|.mjs$/,
  showTable: true
}

// path with your's routes files
const defaultPath = path.join(__dirname, './routes')

registerRoutes(fastify, defaultPath, opts)

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

## disclaimer
any error can be reported, as issue and I am accepting PR's :)
