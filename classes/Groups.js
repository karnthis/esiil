const Core = require('../libs/Core')

class Image extends Core {
  alliance(alliance_id) {
    return this.basicPublicGet(`alliances/${alliance_id}/icons/`)
  }
  character(character_id) {
    return this.basicPublicGet(`characters/${character_id}/portrait/`)
  }
  corp(corporation_id) {
    return this.basicPublicGet(`corporations/${corporation_id}/icons/`)
  }
}

module.exports = {
  Image
}