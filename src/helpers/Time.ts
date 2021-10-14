function _nowInSeconds(): number {
  return Math.round(Date.now() / 1000)
}

export {
  _nowInSeconds
}