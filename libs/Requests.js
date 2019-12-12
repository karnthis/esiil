const { request } = require('https')
const { isURL } = require('../helpers/Validation')


module.exports = {

  basicGet(path, data, extraParams = []) {
    const options = {
      method: 'GET',
      headers: {
        'User-Agent': data.userAgent
      }
    }
    const partUrl = `${data.domainAndVersion}${cleanURL(path)}${data.queryParams}`
    const url = [partUrl, ...extraParams].join('&')
    return allRequest(url, options)
  },
  sendPathRequest(path, options = {}, data, payload = '') {
    options.headers = options.headers || {}
    options.headers['User-Agent'] = data.userAgent
    const url = `${data.domainAndVersion}${cleanURL(path)}${data.queryParams}`
    return allRequest(url, options, payload)
  },
  sendCustomRequest(url, options = {}, payload = '', data) {
    options.headers = options.headers || {}
    options.headers['User-Agent'] = data.userAgent
    return allRequest(url, options, payload)
  },
  sendTokenRequest(url, options = {}) {
    return allRequest(url, options)
  }  
}

function cleanURL(s) {
  while (s.indexOf('/') === 0) {
    s = s.slice(1)
  }
  return s
}

function allRequest(url, options, payload) {
  return new Promise((resolve, reject) => {
    if (isURL(url)) {
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
      if (payload) req.write(payload)
      req.on('error', function (err) {
        reject(err)
      })
      req.end()
    } else reject(new Error('invalid url'))
  })
}