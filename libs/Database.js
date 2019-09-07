const FS = require('fs')

const SQLite = require('sqlite3')

module.exports = class SQLEngine {
  constructor(mode) {
    if (!FS.existsSync('./data/test.sqlite')) {
      // console.log('not exists')
      FS.mkdirSync('./data', { recursive: true });
      FS.writeFileSync('./data/test.sqlite', '', { flag: 'wx' }, function (err) {
        if (err) console.error(err);
      })
    } else {
      // console.log('exists')
    }
    const { Database } = SQLite.verbose()
    if (false && mode == 'memory') {
      this.db = new Database(':memory:', (err) => {
        if (err) return console.error(err.message);
        else console.log('Connected to the in-memory SQLite database.');
      })
    } else {
      this.db = new Database('./data/test.sqlite', (err) => {
        if (err) return console.error(err.message);
        else console.log('Connected to the on-disk SQLite database.');
      })
    }
    this.initDB()
  }

  initDB() {
    this.db.serialize(() => {
      // this.db.run("CREATE TABLE IF NOT EXISTS test_cache (path TEXT, res BLOB, stamp NUMBER)")
      // this.db.run("CREATE TABLE IF NOT EXISTS configs (key TEXT NOT NULL, value BLOB NOT NULL, stamp NUMBER)")
      this.db.run("CREATE TABLE IF NOT EXISTS users (toon_name TEXT NOT NULL, char_id NUMBER NOT NULL, access_token TEXT NOT NULL, expires NUMBER NOT NULL, refresh_token TEXT NOT NULL, scope TEXT)")
      this.db.run("CREATE TABLE IF NOT EXISTS scopes (scope_id NUMBER NOT NULL, scope_value TEXT NOT NULL)")
      this.db.run(scopeSQL)
    })
    this.db.close((err) => {
      if (err) return console.error(err.message)
    })
  }

}

const scopeSQL = `INSERT INTO scopes (scope_id, scope_value)
VALUES (1, "publicData"),
(2, "esi-calendar.respond_calendar_events.v1"),
(3, "esi-calendar.read_calendar_events.v1"),
(4, "esi-location.read_location.v1"),
(5, "esi-location.read_ship_type.v1"),
(6, "esi-mail.organize_mail.v1"),
(7, "esi-mail.read_mail.v1"),
(8, "esi-mail.send_mail.v1"),
(9, "esi-skills.read_skills.v1"),
(10, "esi-skills.read_skillqueue.v1"),
(11, "esi-wallet.read_character_wallet.v1"),
(12, "esi-wallet.read_corporation_wallet.v1"),
(13, "esi-search.search_structures.v1"),
(14, "esi-clones.read_clones.v1"),
(15, "esi-characters.read_contacts.v1"),
(16, "esi-universe.read_structures.v1"),
(17, "esi-bookmarks.read_character_bookmarks.v1"),
(18, "esi-killmails.read_killmails.v1"),
(19, "esi-corporations.read_corporation_membership.v1"),
(20, "esi-assets.read_assets.v1"),
(21, "esi-planets.manage_planets.v1"),
(22, "esi-fleets.read_fleet.v1"),
(23, "esi-fleets.write_fleet.v1"),
(24, "esi-ui.open_window.v1"),
(25, "esi-ui.write_waypoint.v1"),
(26, "esi-characters.write_contacts.v1"),
(27, "esi-fittings.read_fittings.v1"),
(28, "esi-fittings.write_fittings.v1"),
(29, "esi-markets.structure_markets.v1"),
(30, "esi-corporations.read_structures.v1"),
(31, "esi-characters.read_loyalty.v1"),
(32, "esi-characters.read_opportunities.v1"),
(33, "esi-characters.read_chat_channels.v1"),
(34, "esi-characters.read_medals.v1"),
(35, "esi-characters.read_standings.v1"),
(36, "esi-characters.read_agents_research.v1"),
(37, "esi-industry.read_character_jobs.v1"),
(38, "esi-markets.read_character_orders.v1"),
(39, "esi-characters.read_blueprints.v1"),
(40, "esi-characters.read_corporation_roles.v1"),
(41, "esi-location.read_online.v1"),
(42, "esi-contracts.read_character_contracts.v1"),
(43, "esi-clones.read_implants.v1"),
(44, "esi-characters.read_fatigue.v1"),
(45, "esi-killmails.read_corporation_killmails.v1"),
(46, "esi-corporations.track_members.v1"),
(47, "esi-wallet.read_corporation_wallets.v1"),
(48, "esi-characters.read_notifications.v1"),
(49, "esi-corporations.read_divisions.v1"),
(50, "esi-corporations.read_contacts.v1"),
(51, "esi-assets.read_corporation_assets.v1"),
(52, "esi-corporations.read_titles.v1"),
(53, "esi-corporations.read_blueprints.v1"),
(54, "esi-bookmarks.read_corporation_bookmarks.v1"),
(55, "esi-contracts.read_corporation_contracts.v1"),
(56, "esi-corporations.read_standings.v1"),
(57, "esi-corporations.read_starbases.v1"),
(58, "esi-industry.read_corporation_jobs.v1"),
(59, "esi-markets.read_corporation_orders.v1"),
(60, "esi-corporations.read_container_logs.v1"),
(61, "esi-industry.read_character_mining.v1"),
(62, "esi-industry.read_corporation_mining.v1"),
(63, "esi-planets.read_customs_offices.v1"),
(64, "esi-corporations.read_facilities.v1"),
(65, "esi-corporations.read_medals.v1"),
(66, "esi-characters.read_titles.v1"),
(67, "esi-alliances.read_contacts.v1"),
(68, "esi-characters.read_fw_stats.v1"),
(69, "esi-corporations.read_fw_stats.v1"),
(70, "esi-characterstats.read.v1")`

// //TODO	Create db functions

// export function lorem() {
//   db.serialize(function () {
//     db.run("CREATE TABLE lorem (info TEXT)");

//     var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();

//     db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
//       if (err) console.log(err)
//       else console.log(row.id + ": " + row.info);
//     });
//   });

//   db.close();
// }



// db.serialize(function() {
// 	db.run("CREATE TABLE lorem (info TEXT)");

// 	var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
// 	for (var i = 0; i < 10; i++) {
// 		stmt.run("Ipsum " + i);
// 	}
// 	stmt.finalize();

// 	db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
// 		if (err) console.log(err)
// 		else console.log(row.id + ": " + row.info);
// 	});
// });

// db.close();


// *** EXAMPLE *** //
// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
// 		if (err) console.log(err)
//     else console.log(row.id + ": " + row.info);
//   });
// });

// db.close();