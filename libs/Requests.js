const { get, request } = require('https')
const { URL } = require('./Validate')


module.exports = {
  getRequest(url, options) {
    return new Promise((resolve, reject) => {
      if (URL(url)) {
        console.log(url)
        get(url, options, (res) => {
          res.setEncoding('utf8');
          let body = ''
          const status = res.statusCode
          res.on('data', (data) => {
            body += data
          })
          return res.on('end', () => {
            body = JSON.parse(body)
            resolve({ body, status })
          })
        })
      } else reject(new Error('invalid url'))
    })
  },

  allRequest(url, options, payload) {
    return new Promise((resolve, reject) => {
      if (URL(url)) {
        console.log(url)
        const req = request(url, options, (res) => {
          console.dir('req.getHeaders')
          console.dir(req.getHeaders())
          console.dir('end req.getHeaders')
          res.setEncoding('utf8');
          const resBody = []
          const status = res.statusCode
          res.on('data', (data) => {
            resBody.push(data)
          })
          res.on('end', () => {
            // console.dir(resBody)
            resolve({
              body: JSON.parse(resBody.join()),
              status
            })
          })
        })
        req.write(payload)
        req.on('error', function (err) {
          reject(err)
        })
        req.end()
      } else reject(new Error('invalid url'))
    })
  }
}