const { callbackIsFunFiltra, callbackIsFunStampaArray } = require('./es-02.js')

test('callbackIsFunFiltra', () => {
    const numeri = [1, 2, 3, 4, 5]
    
    const numeriPari = callbackIsFunFiltra(numeri, (numero) => numero % 2 === 0)
    
    expect(numeriPari).toEqual([false, true, false, true, false])
})

test('callbackIsFunStampaArray', () => {
    const mockCallback = jest.fn(a => console.log('processo ', a))
    const numeri = [1, 2, 3, 4, 5]
    
    callbackIsFunStampaArray(numeri, mockCallback)
    
    expect(mockCallback.mock.calls).toHaveLength(numeri.length)
})

