# ESIIL | ESI Interface Library
## About ESIIL
ESIIL was created to simplify use of the EVE Swagger Interface API, and offers access to both Public and Authenticated routes. It is currently a work in progress, and not all routes are implemented. 

If you find an ESI route you want to use and is not available yet, please [open an Issue](https://github.com/karnthis/esiio/issues/new) requesting the route to be added.

## How to use ESIIL

### Install
```shell
npm install esiil
```
### Example Express API
```javascript
const Express = require('express')
const ESIIL = require('esiil')

const app = Express();
const project = ESIIL({
  clientID: 'MyClientID',
  clientSecret: 'MyClientSecret',
  callbackURL: 'http://localhost:51515/callback',
  userAgent: 'ESIIL-My-App',
  state: 'MyState',
  scopes: ['esi-universe.read_structures.v1','esi-characters.read_medals.v1','etc']
})

const myCharacter = project.newCharacter()

app.get('/auth', (req, res) => {
  res.status(301).redirect(project.authRequestURL())
})

app.get('/callback', async (req, res) => {
  const { toonID } = await project.receiveAuthCode(req.query.code)
})

app.get('/mylp', async (req, res) => {
  myCharacter.lp(toonID)
  .then(res => console.dir(res.body))
  .catch(err => console.error(err))
  res.send('done')
})
```

## Supported Routes
- All public routes except:
  - Universe
- The following private routes:
  - Alliance
    - Contacts
  - Calendar
    - All
    - One
    - Attendees
  - Character
    - Assets
    - Blueprints
    - Bookmarks
    - Clones
    - Contacts
    - Contracts
    - CSPA
    - Faction Warfare
    - Fatigue
    - Implants
    - Loyalty Points
    - Medals
    - Members
    - Notifications
    - Opportunities
    - Planets
    - Research
    - Roles
    - Search
    - Standings
    - Stats
    - Titles
  - Corp
    - Assets
    - Blueprints
    - Bookmarks
    - Contacts
    - Containers
    - Contracts
    - Divisions
    - Facilities
    - Faction Warfare
    - Medals
    - Members
    - Roles
    - Shareholders
    - Standings
    - Starbases
    - Structures
    - Titles