'use strict'

function nowInSeconds() {
  return Math.round(Date.now() / 1000)
}

module.exports = {
  nowInSeconds
}