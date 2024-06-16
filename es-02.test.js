const { callbackIsFunFiltra, callbackIsFunStampaArray, callbackIsFunMappaPotenza, callbackIsFunCompose } = require('./es-02.js')

test('callbackIsFunFiltra', () => {
    const numeri = [1, 2, 3, 4, 5]
    
    const numeriPari = callbackIsFunFiltra(numeri, (numero) => numero % 2 === 0)
    
    expect(numeriPari).toHaveLength(2)
})

test('callbackIsFunStampaArray', () => {
    const mockCallback = jest.fn(a => console.log('processo ', a))
    const numeri = [1, 2, 3, 4, 5]
    
    callbackIsFunStampaArray(numeri, mockCallback)
    
    expect(mockCallback.mock.calls).toHaveLength(numeri.length)
})



test('callbackIsFunMappaPotenza', () => {
  const param = [ 2, 3, 4 ]
  
  const ristultato = callbackIsFunMappaPotenza(param)

  expect(ristultato).toEqual([ 4, 9, 16 ])
})

test('callbackIsFunCompose', () => {
  const parametroIniziale = 56
  const testo = 'Ciao sono un semplice testo'
  
  const ristultato = callbackIsFunCompose(parametroIniziale, param => param+4, param => param+10)
  const risultato_due = callbackIsFunCompose( 'Ciao', param => `${param} mondo`, param => `${param}!` )
  const risultato_html = callbackIsFunCompose( testo, param => `<i>${param}</i>`, param => `<p>${param}</p>`)

  expect(ristultato).toBe(70)
  expect(risultato_due).toEqual('Ciao mondo!')
  expect(risultato_html).toEqual(`<p><i>${testo}</i></p>`)
})

