# ESIIO | ESI Interface Tool
## About ESIIO
ESIIO was created to simplify use of the EVE Swagger Interface API, and offers access to both Public and Authenticated routes. It is currently a work in progress, and not all routes are implemented. 

If you find an ESI route you want to use and is not available yet, please [open an Issue](https://github.com/karnthis/esiio/issues/new) requesting the route to be added.

## How to use ESIIO

### Install
```shell
npm install esiio
```
### Add to project
```javascript
const { Authenticate, Character } = require('esiio')

const Auth = new Authenticate(
  {
    clientID: 'MyClientID',
    clientSecret: 'MyClientSecret',
    cbPath: 'http://localhost:51515/callback',
    agent: 'ESIIO-My-App',
    scope: ['esi-universe.read_structures.v1','etc']
  }
)

const Char = new Character(Auth.share())
// use Char in Express route or directly
Char.corpHistory(92014574)
.then(resp => console.log(resp.body))
.catch(err => console.error(err))
```

## Supported Routes
- All public routes except:
  - Universe
- The following private routes:
  - Alliance
    - Contacts
  - Calandar
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