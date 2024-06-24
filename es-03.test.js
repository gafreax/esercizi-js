/* eslint-env jest */
const { foreachIsFunCall, renderingIsFunListe, reduceIsFunMedia } = require('./es-03-soluzione.js')

describe('es-03', () => {
  test('foreachIsFun', () => {
    const v = ['primo', 'secondo', 'terzo']
    const mockCallback = jest.fn()

    foreachIsFunCall(v, mockCallback)

    expect(mockCallback.mock.calls).toHaveLength(v.length)
  })

  test('reduceIsFunMedia correct media ', () => {
    const dati = [1, 5, 89, 2, 4, 56, 3]

    const media = reduceIsFunMedia(dati)

    expect(Math.floor(media)).toBe(22)
  })

  test('reduceIsFunMedia reduce is called ', () => {
    const dati = [1, 2, 3]
    dati.reduce = jest.fn()

    const media = reduceIsFunMedia(dati)

    expect(media).toBeDefined()
    expect(dati.reduce).toHaveBeenCalled()
  })

  test('renderingIsFunListe html list is correct', () => {
    const dati = ['a', 'b', 'c']

    const listaHtml = renderingIsFunListe(dati)

    expect(listaHtml).toEqual('<ul><li>a</li><li>b</li><li>c</li></ul>')
  })
})
