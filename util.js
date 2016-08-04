exports.objToStrMap = function (obj) {
  let strMap = new Map()
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k])
  }
  return strMap
}

exports.stringToHexColor = function (hexString) {
  return parseInt(hexString.replace(/^#/, ''), 16)
}
