function callbackIsFunFiltra(array, callback) {
    return array.map( element => callback(element))
}

function callbackIsFunStampaArray (array, callback) {
    array.forEach(element => callback(element))
}

function callbackIsFunCompose(param, funOne, funTwo) {
    return funTwo(funOne(param))
}

module.exports = {
    callbackIsFunFiltra,
    callbackIsFunStampaArray,
    callbackIsFunCompose
}