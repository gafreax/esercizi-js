function spreadIsFunConcatenareDueArray (arr1, arr2) {
  return [...arr1, ...arr2]
}

function spreadIsFunAggiungereUnCampo (parametro) {
  return { ...parametro, data: new Date() }
}

function spreadIsFunConcatenaStringhe (...stringhe) {
  return stringhe.join('')
}

module.exports = {
  spreadIsFunConcatenareDueArray,
  spreadIsFunAggiungereUnCampo,
  spreadIsFunConcatenaStringhe
}
