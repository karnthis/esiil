# ESIIL | ESI Interface Library | **BETA 0.3.x**
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

/**
 * 
 * The state configuration field is not required, all
 * other fields are required for authenticated routes
 * to function. Scopes must match or be a subset of
 * the scopes defined in your application submission
 * with CCP.
 * 
 **/

const project = ESIIL({
  clientID: 'MyClientID',
  clientSecret: 'MyClientSecret',
  callbackURL: 'http://localhost:51515/callback',
  userAgent: 'ESIIL-My-App',
  state: 'MyState',
  scopes: ['esi-characters.read_loyalty.v1', 'esi-assets.read_assets.v1','etc']
})

const myCharacter = project.newCharacter()

/**
 * 
 * Authenticate the character, fetch the token, and
 * process and store the token for use.
 * 
 **/

app.get('/auth', (req, res) => {
  res.status(301).redirect(project.authRequestURL())
})

app.get('/callback', async (req, res) => {
  const { toonID } = await project.receiveAuthCode(req.query.code)
})

/**
 * 
 * Make a call to an authenticated route. Provide
 * the authenticated character's ID.
 * 
 **/

app.get('/mylp', async (req, res) => {
  myCharacter.lp(toonID)
  .then(res => console.dir(res.body))
  .catch(err => console.error(err))
  res.send('done')
})

/**
 * 
 * All functions accept a final argument of an object
 * containing one or more extra query parameters the user
 * wishes to append to their request. For example below
 * we are requesting page 2 of the assets list.
 * 
 **/

app.get('/myassets', async (req, res) => {
  myCharacter.assets(toonID, { page: 2 })
  .then(res => console.dir(res.body))
  .catch(err => console.error(err))
  res.send('done')
})
```
### Response Format
```
body
status (statusCode)
etag
expires
lastModified (last-modified)
xPages (x-pages)
xErrorLimitRemain (x-esi-error-limit-remain)
xErrorLimitReset (x-esi-error-limit-reset)
```

## Supported Routes
- All public routes except:
  - Universe (partial support)
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