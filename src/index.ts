import { _processAuthToken } from './indexHelper'

import Core from './classes/Core'

import Alliance from './classes/Alliance'
import Calendar from './classes/Calendar'
import Character from './classes/Character'
import Contract from './classes/Contract'
import Corp from './classes/Corp'
import Dogma from './classes/Dogma'
import FactionWarfare from './classes/FactionWarfare'
import General from './classes/General'
import Industry from './classes/Industry'
import Market from './classes/Market'
import Opportunity from './classes/Opportunity'
import Sovereignty from './classes/Sovereignty'
import Universe from './classes/Universe'
import War from './classes/War'

import IInstanceConfig from "./interfaces/InstanceConfig";

class ESIIL extends Core.CoreClass {

    constructor(cfg: IInstanceConfig) {
        super(cfg)
    }

    authRequestURL() {
        return this.loginRequestURL
    }
    receiveAuthCode(authCode: string) {
        return _processAuthToken(authCode, this.ccpJwt)
    }

    newAlliance() {
        return new Alliance(this.clone())
    }
    newCalendar() {
        return new Calendar(this.clone())
    }
    newCharacter() {
        return new Character(this.clone())
    }
    newContract() {
        return new Contract(this.clone())
    }
    newCorp() {
        return new Corp(this.clone())
    }
    newDogma() {
        return new Dogma(this.clone())
    }
    newFactionWarfare() {
        return new FactionWarfare(this.clone())
    }
    newGeneral() {
        return new General(this.clone())
    }
    newIndustry() {
        return new Industry(this.clone())
    }
    newMarket() {
        return new Market(this.clone())
    }
    newOpportunity() {
        return new Opportunity(this.clone())
    }
    newSovereignty() {
        return new Sovereignty(this.clone())
    }
    newUniverse() {
        return new Universe(this.clone())
    }
    newWar() {
        return new War(this.clone())
    }
}


function init(cfg: IInstanceConfig) {
    return new ESIIL(cfg)
}

export default init
