function _cleanURL(s) {
  while (s.indexOf('/') === 0) {
    s = s.slice(1)
  }
  return s
}

function _paramsToString(params = {}) {
  const ret = ['']
  const paramKeys = Object.keys(params)
  if (paramKeys.length === 0) {
    // do nothing
  } else {
    paramKeys.forEach(key => {
      ret.push(`${key}=${params[key]}`)
    })
  }
  return ret.join('&')
}

module.exports = {
  _cleanURL,
  _paramsToString
}