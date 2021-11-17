import IExtraParametersWithSig from "../interfaces/ExtraParametersWithSig";

function _cleanURL(s: string): string {
  while (s.indexOf('/') === 0) {
    s = s.slice(1)
  }
  return s
}

function _paramsToString(params: IExtraParametersWithSig): string {
  const ret: string[] = ['']
  const paramKeys: string[] = Object.keys(params)
  if (paramKeys.length === 0) {
    // do nothing
  } else {
    paramKeys.forEach((key: string) => {
      ret.push(`${key}=${params[key]}`)
    })
  }
  return ret.join('&')
}

export {
  _cleanURL,
  _paramsToString
}