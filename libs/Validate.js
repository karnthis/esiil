
function IsString(s) {
  return typeof s === 'string';
}
function isInt(s) {
  return !isNaN(Number(s))
}
function URL(s) {
  return (IsString(s) && /^https?:\/\//.test(s));
}
function Version(s) {
  return (IsString(s) && /^(?:latest|dev|legacy)$/.test(s));
}
function Source(s) {
  return (IsString(s) && /^(?:tranquility|singularity)$/.test(s));
}
function CacheMode(s) {
  return (IsString(s) && /^(?:sqlDisk|sqlMemory)$/.test(s));
}



module.exports = {
  IsString,
  URL,
  Version,
  Source,
  CacheMode,
  isInt
} 