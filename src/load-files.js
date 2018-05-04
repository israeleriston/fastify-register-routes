'use strict'
const path = require('path')
const filterFiles = require('filter-files')
const isDir = require('is-directory')
const { flatten, isUndefined } = require('lodash')
const defaultRegex = /((Route)|(Routes)|(route)|(routes))\.js|.mjs$/
const regexName = opts => !isUndefined(opts && opts.regex) ? opts.regex : defaultRegex
const isRouteFile = (fileName, regex) => regex.test(fileName)

/**
 * @method getRoutesFilesFromDirname
 * @param  {String}            dirName
 * @return {Array<String>}
 */
const getRoutesFilesFromDirname = (dirName, regex) => {
  return filterFiles.sync(dirName, (fp, dir, files, recurse) => {
    if (isRouteFile(fp, regex)) {
      return true
    }

    return isDir.sync(path.join(dir, fp))
  }, true)
}

/**
 * @method loadRoutesByPath
 * @param  {String}           dirName
 * @return {Array<Function>}   array of routes
 */
const loadRoutesByPath = (dirName, opts) => {
  const regex = regexName(opts)
  const routes = getRoutesFilesFromDirname(dirName, regex)
    .map(require)
  return flatten(routes)
}

module.exports = loadRoutesByPath
