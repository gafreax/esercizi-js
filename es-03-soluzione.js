function foreachIsFunCall (dati, callback) {
  dati.forEach(element => callback())
}

function reduceIsFunMedia (dati) {
  const somma = dati.reduce((p, c) => p + c, 0)
  return somma / dati.length
}

function renderingIsFunListe (dati) {
  const elementiDellaLista = dati.map(e => `<li>${e}</li>`)
  return `<ul>${elementiDellaLista.join('')}</ul>`
}

module.exports = {
  foreachIsFunCall,
  reduceIsFunMedia,
  renderingIsFunListe
}
