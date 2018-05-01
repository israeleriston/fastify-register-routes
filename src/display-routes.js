const { table } = require('table')
const head = [
  'method',
  'path',
  'name',
  'version'
]

/**
 * @method routeToRow
 * @param  {Object}   route
 * @return {Array<String>}
 */
const routeToRow = route => {
  const { method, path, name, version } = route
  return ([method, path, name, version])
}

/**
 * @method parseRoutesToRows
 * @param  {Array<Object>}    routes
 * @return {Array<String>}
 */
const parseRoutesToRows = routes => {
  const rows = routes.map(routeToRow)
  return [head, ...rows]
}

/**
 * @method displayRoutes
 * @param  {Array<Object>}     routes
 */
const displayRoutes = routes => {
  const rows = parseRoutesToRows(routes)

  console.log(table(rows))
}

module.exports = displayRoutes
