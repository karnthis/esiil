
function IsString(testValue) {
  return typeof testValue === 'string';
}
function isInt(testValue) {
  return !isNaN(Number(testValue))
}
function isURL(testValue) {
  return (IsString(testValue) && /^https?:\/\//.test(s));
}
function isVersion(testValue) {
  return (IsString(testValue) && /^(?:latest|dev|legacy)$/.test(s));
}
function isSource(testValue) {
  return (IsString(testValue) && /^(?:tranquility|singularity)$/.test(s));
}
function isCacheMode(testValue) {
  return (IsString(testValue) && /^(?:sqlDisk|sqlMemory)$/.test(s));
}



module.exports = {
  IsString,
  isURL,
  isVersion,
  isSource,
  isCacheMode,
  isInt
} 