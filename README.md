# Fastify Register Routes
> fastify register routes (fastify-register-routes) is a simple plugin that contains an scheme the auto-loading file, auto registration the routes and a wrap handler to a router. And following with packages that are using day-to-day to developing the api, whats that's Boom, Lodash and table (to showing an table within with all routes registred's)


## How to install ?

`npm i fastify-register-routes --save`


## How do use ?

```js
const path = require('path')
const Fastify = require('fastify')
const registerRoutes = require('fastify-register-routes')

const fastify = Fastify()

const opts = {
  // you regex to test file name the router Ex.: user-router.js
  // if anyone informed i will uses the regex default is `((Route)|(Routes)|(route)|(routes))\.js|.mjs$`
  regex: /((Route)|(Routes))\.js|.mjs$/,

  // after loaded all routes, will showind one table with all routes registred's
  // by default is option false
  showTable: true
}
// path with your's routes
const defaultPath = path.join(__dirname, './routes')



registerRoutes(fastify, defaultPath)
```
