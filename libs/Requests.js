'use strict'

const { request } = require('https')
const { _isURL } = require('../helpers/Validation')
const { _cleanURL, _paramsToString } = require('./RequestsHelpers')

module.exports = {

  _basicGet(path, extraParams = {}, data) {
    const options = {
      method: 'GET',
      headers: {
        'User-Agent': data.userAgent
      }
    }
    const url = `${data.domainAndVersion}${_cleanURL(path)}${data.queryParamStart}${_paramsToString(extraParams)}`
    return _allRequest(url, options)
  },
  //TODO clean up arg order
  _sendPathRequest(path, extraParams = {}, options = {}, data, payload = '') {
    options.headers = options.headers || {}
    options.headers['User-Agent'] = data.userAgent
    const url = `${data.domainAndVersion}${_cleanURL(path)}${data.queryParamStart}${_paramsToString(extraParams)}`
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
  // console.log('options:')
  // console.dir(options)
  // console.log('payload:')
  // console.dir(payload)
  return new Promise((resolve, reject) => {
    if (_isURL(url)) {
      // console.log(url)
      const req = request(url, options, (res) => {
        // console.log('STATUSCODE: ', res.statusCode)
        res.setEncoding('utf8');
        const resBody = []
        res.on('data', (data) => {
          // console.log('resDATA: ', data)
          resBody.push(data)
        })
        res.on('end', () => {
          resolve({
            body: JSON.parse(resBody.join('')),
            status: res.statusCode,
            etag: res.headers.etag,
            expires: res.headers.expires,
            lastModified: res.headers['last-modified'],
            xPages: res.headers['x-pages'],
            xErrorLimitRemain: res.headers['x-esi-error-limit-remain'],
            xErrorLimitReset: res.headers['x-esi-error-limit-reset']
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
