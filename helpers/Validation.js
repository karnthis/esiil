
function _isString(testValue) {
  return typeof testValue === 'string';
}
function _isInt(testValue) {
  return !isNaN(Number(testValue))
}
function _isURL(testValue) {
  return (_isString(testValue) && /^https?:\/\//.test(s));
}
function _isVersion(testValue) {
  return (_isString(testValue) && /^(?:latest|dev|legacy)$/.test(s));
}
function _isSource(testValue) {
  return (_isString(testValue) && /^(?:tranquility|singularity)$/.test(s));
}
function _isCacheMode(testValue) {
  return (_isString(testValue) && /^(?:sqlDisk|sqlMemory)$/.test(s));
}



module.exports = {
  _isString,
  _isURL,
  _isVersion,
  _isSource,
  _isCacheMode,
  _isInt
} 