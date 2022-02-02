const { infixToPostfix } = require('../../lib/parser')

test('infixToPostfix: should be able to convert valid expressions', () => {
    expect(infixToPostfix('1 + 2 + 3')).toEqual('12+3+')
    expect(infixToPostfix('(1 + 2) * 3')).toEqual('12+3*')
    expect(infixToPostfix('1 + 2 * 3')).toEqual('123*+')
})

test('infixToPostfix: should reject invalid expressions', () => {
    expect(() => infixToPostfix('(1 + 2 / 3 + ( 2 - 3 (')).toThrow()
    expect(() => infixToPostfix('1 +* 2)')).toThrow()
})