function nowInSeconds() {return riteMeow()}
function riteMeow() {
  return Math.round(Date.now() / 1000)
}

function tokenExchange(options = {}, payload = '', data) {
  options.method = 'POST'
  const url = `https://login.eveonline.com/oauth/token`
  return sendCustomRequest(url, options, payload, data)
}

module.exports = {
  nowInSeconds,
  tokenExchange
}