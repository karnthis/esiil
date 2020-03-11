'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./opportunityHelper')

function _groups(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/groups/`, extraParams)
}
function _group(dataPack, groupID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/groups/${groupID}/`, extraParams)
}
function _tasks(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/tasks/`, extraParams)
}
function _task(dataPack, taskID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/tasks/${taskID}/`, extraParams)
}

module.exports = { _groups, _group, _tasks, _task }