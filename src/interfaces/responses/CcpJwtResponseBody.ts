import ICcpJwt from "../CcpJwt";

export default interface ICcpJwtResponseBody {
    keys: ICcpJwt[]
    SkipUnresolvedJsonWebKeys: boolean
}