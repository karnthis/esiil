'use strict'

const { request } = require('https')
const { _isURL } = require('../helpers/Validation')
const { _cleanURL } = require('./RequestsHelpers')

module.exports = {

  _basicGet(path, data, extraParams = []) {
    const options = {
      method: 'GET',
      headers: {
        'User-Agent': data.userAgent
      }
    }
    const partUrl = `${data.domainAndVersion}${_cleanURL(path)}${data.queryParams}`
    const url = [partUrl, ...extraParams].join('&')
    return _allRequest(url, options)
  },
  //TODO clean up arg order
  _sendPathRequest(path, options = {}, data, payload = '') {
    options.headers = options.headers || {}
    options.headers['User-Agent'] = data.userAgent
    const url = `${data.domainAndVersion}${_cleanURL(path)}${data.queryParams}`
    return _allRequest(url, options, payload)
  },
  _sendCustomRequest(url, options = {}, payload = '', data) {
    options.headers = options.headers || {}
    options.headers['User-Agent'] = data.userAgent
    return _allRequest(url, options, payload)
  },
  _sendTokenRequest(url, options = {}) {
    return _allRequest(url, options)
  }  
}

function _allRequest(url, options, payload) {
  return new Promise((resolve, reject) => {
    if (_isURL(url)) {
      console.log(url)
      const req = request(url, options, (res) => {
        res.setEncoding('utf8');
        const resBody = []
        const status = res.statusCode
        console.dir(status)
        res.on('data', (data) => {
          resBody.push(data)
        })
        res.on('end', () => {
          resolve({
            body: JSON.parse(resBody.join('')),
            status
          })
        })
      })
      if (payload) req.write(JSON.stringify(payload))
      req.on('error', function (err) {
        reject(err)
      })
      req.end()
    } else reject(new Error('invalid url'))
  })
}