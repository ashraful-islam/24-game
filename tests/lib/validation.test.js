const { isExpressionValid } = require('../../lib/validation')

test('isExpressionValid: should recognize valid expressions', () => {
    expect(isExpressionValid('1+1')).toBeTruthy()
    expect(isExpressionValid('1+2-3/4')).toBeTruthy()
    expect(isExpressionValid('(1+2)/3-(4*5)')).toBeTruthy()
    expect(isExpressionValid('(1/2) * 3 - 4')).toBeTruthy()
})

test('isExpressionValid: should recognize invalid expressions', () => {
    expect(isExpressionValid('1^1')).toBeFalsy()
    expect(isExpressionValid('(1+2-3')).toBeFalsy()
    expect(isExpressionValid(')(1+2)')).toBeFalsy()
    expect(isExpressionValid('12+12')).toBeFalsy()
})