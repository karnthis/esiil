const { getRequest, postRequest } = require('./Requests')

module.exports =  class Core {
  constructor(cfg = {}) {
    this.baseURL = cfg.base || 'https://esi.evetech.net/' // should not be overrode
    this.version = cfg.ver || 'latest/' // latest || dev || legacy
    this.source = cfg.src || 'tranquility' // tranquility || singularity
    // this.cacheMode = 'sql' // sqlDisk || sqlMemory

    this.urlPt1 = `${this.baseURL}${this.version}`
    this.urlPt2 = `?datasource=${this.source}`
  }

  // **** FUNCTIONS **** \\
  basicPublicGet(path) {
    while (path.indexOf('/') === 0) {
      path = path.slice(1)
    }
    return getRequest(`${this.urlPt1}${path}${this.urlPt2}`,{})
  }
  basicPublicPost(path, options = {}, payload) {
    while (path.indexOf('/') === 0) {
      path = path.slice(1)
    }
    return postRequest(`${this.urlPt1}${path}${this.urlPt2}`, options, payload)
  }
  basicRestrictedCall(path) {
    while (path.indexOf('/') === 0) {
      path = path.slice(1)
    }
    return getRequest(`${this.urlPt1}${path}${this.urlPt2}`,{})
  }
  tokenPost(options = {}, payload = '') {
    return postRequest(`https://login.eveonline.com/oauth/token`, options, payload)
  }
  // **** END FUNCTIONS **** \\


}