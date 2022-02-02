const { postfixEvaluator } = require('../../lib/evaluator')

test('postfixEvaluator: should correctly evaluate complete postfix expressions', () => {
    expect(postfixEvaluator('456*+')).toBe(34)
    expect(postfixEvaluator('12+3+')).toBe(6)
    expect(postfixEvaluator('12+3*')).toBe(9)
    expect(postfixEvaluator('123*+')).toBe(7)
})

test('postfixEvaluator: should reject invalid expressions', () => {
    expect(() => postfixEvaluator('456')).toThrow()
    expect(() => postfixEvaluator('1+1+1')).toThrow()
})