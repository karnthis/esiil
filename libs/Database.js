'use strict'

const FS = require('fs')
const { _initDB  } = require('./DatabaseHelpers')

const SQLite = require('sqlite3')


module.exports = class SQLEngine {
  constructor(cfg = {}) {
    const { dbPath = './esiil_db/', dbName = 'main.sqlite' } = cfg
    if (!FS.existsSync(`${dbPath}${dbName}`)) {
      FS.mkdirSync(`${dbPath}`, { recursive: true });
      FS.writeFileSync(`${dbPath}${dbName}`, '', { flag: 'wx' }, function (err) {
        if (err) console.error(err);
      })
    } else {}
    if (cfg.mode === 'memory') {
      const { Database } = SQLite.verbose()
      this.db = new Database(':memory:', (err) => {
        if (err) {
          return console.error(err.message);
        }
        else {
          console.log('Connected to the in-memory SQLite database.');
        }
      })
      this.db.type = 'sqlite'
    } else if (cfg.mode === 'external'){
      this.db = {type: 'external'}
      console.log('Running in External Database mode.');
      console.log('Not Yet Supported: please use SQLite');
    } else if (cfg.mode === 'json'){
      this.db = {type: 'json'}
      console.log('Running in JSON File mode.');
      console.log('Not Yet Supported: please use SQLite');
    } else {
      const { Database } = SQLite.verbose()
      this.db = new Database(`${dbPath}${dbName}`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        else {
          console.log('Connected to the on-disk SQLite database.');
        }
      })
      this.db.type = 'sqlite'
    }
    _initDB(this.db)
  }

  saveNewToken(data) {
    if (!this.db) {
      return false
    } else {
      const { CharacterName, CharacterID, access_token, expiration, refresh_token, Scopes } = data
      const sql = 'REPLACE INTO users (toon_name, char_id, access_token, expires, refresh_token, scope) VALUES (?,?,?,?,?,?)'
      this.db.run(sql, [
        CharacterName,
        CharacterID,
        access_token,
        expiration,
        refresh_token,
        Scopes
      ], err => console.error(err));
      return true
    }
  }
  saveRefreshedToken(access, expiration, refresh) {
    const sql = 'UPDATE users SET access_token = ?, expires = ? WHERE refresh_token = ?'
    this.db.run(sql, [access, expiration, refresh], err => console.error(err));
  }
  // toon2token(toonID) {
  //   return this.db.get('SELECT access_token, expires, refresh_token FROM users WHERE char_id = ?', [ toonID ], (err, row) => {
  //     console.log('row')
  //     console.dir(row)
  //     console.log('end row')
  //     return row
  //   })
  // }
  toon2token2(toonID) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT access_token as accessToken, expires, refresh_token as refreshToken FROM users WHERE char_id = ?', [ toonID ], (err, row) => {
        if (err) reject(new Error(err))
        return (row) ? resolve(row) : resolve({})
      })
    })
  }
  getAllScopes() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT scope_value as scopeValue FROM scopes'
      this.db.all(sql, [], (err, rows) => {
        if (err) reject(new Error(err))
        const data = rows.map(row => row.scope_value)
        return resolve(data)
      })
    })
  }
}
