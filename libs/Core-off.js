const { getRequest, allRequest } = require('./Requests')

module.exports = class Core {
  constructor(cfg = {}) {
    this.userAgent = cfg.agent || 'ESIIO-Default/0.x'
    this.baseURL = cfg.base || 'https://esi.evetech.net/' // should not be overrode
    this.version = cfg.ver || 'latest/' // latest || dev || legacy
    this.source = cfg.src || 'tranquility' // tranquility || singularity

    this.urlPt1 = `${this.baseURL}${this.version}`
    this.urlPt2 = `?datasource=${this.source}`
  }

  // **** FUNCTIONS **** \\
  publicGet(path) {
    return getRequest(`${this.urlPt1}${cleanURL(path)}${this.urlPt2}`,{headers: {'User-Agent': this.userAgent}})
  }
  publicPost(path, options = {}, payload = '') {
    options.method = 'POST'
    const url = `${this.urlPt1}${cleanURL(path)}${this.urlPt2}`
    return allRequest(url, options, payload)
  }
  tokenGet(path, options = {}) {
    options.headers = options.headers || {}
    options.headers['User-Agent'] = this.userAgent
    return getRequest(path, options)
  }
  tokenPost(path, options = {}, payload = '') {
    options.method = 'POST'
    options.headers = options.headers || {}
    options.headers['User-Agent'] = this.userAgent
    return allRequest(path, options, payload)
  }
  restrictedGet(path, options = {}) {
    options.headers = options.headers || {}
    options.headers['User-Agent'] = this.userAgent
    const url = `${this.urlPt1}${cleanURL(path)}${this.urlPt2}`
    return getRequest(url, options)
  }
  restrictedCall(path, options = {}, payload = '') {
    options.method = options.method || 'POST'
    options.headers = options.headers || {}
    options.headers['User-Agent'] = this.userAgent
    return allRequest(`${this.urlPt1}${cleanURL(path)}${this.urlPt2}`, {})
  }

  // **** END FUNCTIONS **** \\
}

function cleanURL(s) {
  while (s.indexOf('/') === 0) {
    s = s.slice(1)
  }
  return s
}