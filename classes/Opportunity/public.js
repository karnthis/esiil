'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./opportunityHelper')

function _groups(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/groups/`)
}
function _group(dataPack, groupID) {
  return _makePublicGet(dataPack, `${basePath}/groups/${groupID}/`)
}
function _tasks(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/tasks/`)
}
function _task(dataPack, taskID) {
  return _makePublicGet(dataPack, `${basePath}/tasks/${taskID}/`)
}

module.exports = { _groups, _group, _tasks, _task }