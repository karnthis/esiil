
function IsString(s) {
  return typeof s === 'string';
}
function isInt(s) {
  return !isNaN(Number(s))
}
function isURL(s) {
  return (IsString(s) && /^https?:\/\//.test(s));
}
function isVersion(s) {
  return (IsString(s) && /^(?:latest|dev|legacy)$/.test(s));
}
function isSource(s) {
  return (IsString(s) && /^(?:tranquility|singularity)$/.test(s));
}
function isCacheMode(s) {
  return (IsString(s) && /^(?:sqlDisk|sqlMemory)$/.test(s));
}



module.exports = {
  IsString,
  isURL,
  isVersion,
  isSource,
  isCacheMode,
  isInt
} 