'use strict'

const { sendCustomRequest } = require('../../libs/Requests')

function tokenExchange(data, options = {}, payload = '') {
  options.method = 'POST'
  const url = `https://login.eveonline.com/oauth/token`
  return sendCustomRequest(url, options, payload, data)
}

module.exports = {
  tokenExchange
}