function callbackIsFunFiltra (array, callback) {
  return array.filter(callback)
}

function callbackIsFunStampaArray (array, callback) {
  array.forEach(element => callback(element))
}

function callbackIsFunCompose (param, funOne, funTwo) {
  return funTwo(funOne(param))
}

function callbackIsFunMappaPotenza (parametro) {
  return parametro.map(e => e * e)
}

module.exports = {
  callbackIsFunCompose,
  callbackIsFunFiltra,
  callbackIsFunMappaPotenza,
  callbackIsFunStampaArray
}
