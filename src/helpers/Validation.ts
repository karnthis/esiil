function _isString(testValue: string): testValue is string {
  return typeof testValue === 'string';
}
function _isInt(testValue: number): boolean {
  return !isNaN(Number(testValue))
}
function _isURL(testValue: string): boolean {
  return (_isString(testValue) && /^https?:\/\//.test(testValue));
}
function _isVersion(testValue: string): boolean {
  return (_isString(testValue) && /^(?:latest|dev|legacy)$/.test(testValue));
}
function _isSource(testValue: string): boolean {
  return (_isString(testValue) && /^(?:tranquility|singularity)$/.test(testValue));
}




export {
  _isString,
  _isURL,
  _isVersion,
  _isSource,
  _isInt
} 