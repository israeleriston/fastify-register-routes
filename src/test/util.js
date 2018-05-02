const axios = require('axios')

const http = axios.create({
  baseURL: process.env.NODE_URL_TEST
})

module.exports = http
