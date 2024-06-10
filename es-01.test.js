const { spreadIsFunAggiungereUnCampo, spreadIsFunConcatenareDueArray, spreadIsFunConcatenaStringhe } = require('./es-01.js')

test('spreadIsFunAggiungereUnCampo', () => {
  const oggetto = { prodotto: 'orologio', prezzo: 123.32, marca: 'seiko' }

  const result = spreadIsFunAggiungereUnCampo(oggetto)

  expect(result.data).toBeDefined()
})

test('spreadIsFunConcatenareDueArray', () => {
  const arr1 = [1, 2, 3]
  const arr2 = [4, 5, 6]

  const result = spreadIsFunConcatenareDueArray(arr1, arr2)

  expect(result).toEqual([1, 2, 3, 4, 5, 6])
})

test('spreadIsFunConcatenaStringhe', () => {
  const result = spreadIsFunConcatenaStringhe('Ciao', ' ', 'mondo', '!')

  expect(result).toEqual('Ciao mondo!')
})
