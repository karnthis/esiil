import IIdNamePair from "./IdNamePair";

export default interface IName2IdResponseBody {
    agents?: IIdNamePair[],
    alliances?: IIdNamePair[],
    characters?: IIdNamePair[],
    constellations?: IIdNamePair[],
    corporations?: IIdNamePair[],
    factions?: IIdNamePair[],
    inventory_types?: IIdNamePair[],
    regions?: IIdNamePair[],
    stations?: IIdNamePair[],
    systems?: IIdNamePair[]
}