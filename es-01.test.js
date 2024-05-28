const { spreadIsFunAggiungereUnCampo, spreadIsFunConcatenareDueArray } = require('./es-01.js')

test('spreadIsFunAggiungereUnCampo', () => {
  const oggetto = { prodotto: 'orologio', prezzo: 123.32, marca: 'seiko' }

  const result = spreadIsFunAggiungereUnCampo(oggetto)

  expect(result.data).isDefined()
})
