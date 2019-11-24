const { get, request } = require('https')
const { URL } = require('./Validate')


module.exports = {

  basicGet(path, extras = [], data) {
    const options = {
      method: 'GET',
      headers: {
        'User-Agent': data.userAgent
      }
    }
    const partUrl = `${data.urlPt1}${cleanURL(path)}${data.urlPt2}`
    const url = [partUrl, ...extras].join('&')
    return allRequest(url, options)
  },
  sendPathRequest(path, options = {}, data, payload = '') {
    options.headers = options.headers || {}
    options.headers['User-Agent'] = data.userAgent
    const url = `${data.urlPt1}${cleanURL(path)}${data.urlPt2}`
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
  // console.dir(url)
  // console.dir(options)
  // console.dir(payload)
  return new Promise((resolve, reject) => {
    if (URL(url)) {
      console.log(url)
      const req = request(url, options, (res) => {
        // console.dir('req.getHeaders')
        // console.dir(req.getHeaders())
        // console.dir('end req.getHeaders')
        res.setEncoding('utf8');
        const resBody = []
        const status = res.statusCode
        console.dir(status)
        res.on('data', (data) => {
          resBody.push(data)
        })
        res.on('end', () => {
          // console.dir(resBody)
          resolve({
            body: JSON.parse(resBody.join('')),
            status
          })
        })
      })
      // if (payload) req.write(JSON.stringify(payload))
      if (payload) req.write(payload)
      req.on('error', function (err) {
        reject(err)
      })
      req.end()
    } else reject(new Error('invalid url'))
  })
}