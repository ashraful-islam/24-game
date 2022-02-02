const {
    isOperand,
    isOperator,
    isConsecutiveDigit,
    isConsecutiveOperator,
    isLeftParentheses,
    isRightParentheses,
    randomChoiceGenerator,
    onlyIncludesChoices,
} = require('../../lib/util')

test('isOperand: should recognize single digits correctly', () => {
    '987654321'.split('').forEach(digit => expect(isOperand(digit)).toBeTruthy())
    expect(isOperand('41')).toBeFalsy()
    expect(isOperand('+')).toBeFalsy()
})

test('isOperator: should recognize single operator from +-*/', () => {
    '+-*/'.split('').forEach(o => expect(isOperator(o)).toBeTruthy())
    expect(isOperator('^')).toBeFalsy()
    expect(isOperator('%')).toBeFalsy()
    expect(isOperator('')).toBeFalsy()
})

test('isLeftParentheses: should recognize a single left-parentheses', () => {
    expect(isLeftParentheses('(')).toBeTruthy()
    expect(isLeftParentheses('((')).toBeFalsy()
    expect(isLeftParentheses(')')).toBeFalsy()
})

test('isRightParentheses: should recognize a single right-parentheses', () => {
    expect(isRightParentheses(')')).toBeTruthy()
    expect(isRightParentheses('))')).toBeFalsy()
    expect(isRightParentheses('(')).toBeFalsy()
})

test('isConsecutiveDigit: should recognize consecutive digit sequence', () => {
    expect(isConsecutiveDigit('1','2')).toBeTruthy()
    expect(isConsecutiveDigit('', '1')).toBeFalsy()
    expect(isConsecutiveDigit('6','')).toBeFalsy()
    expect(isConsecutiveDigit('(','1')).toBeFalsy()
})

test('isConsecutiveOperator: should recognize consecutive operator sequence', () => {
    expect(isConsecutiveOperator('+','-')).toBeTruthy()
    expect(isConsecutiveOperator('-','+')).toBeTruthy()
    expect(isConsecutiveOperator('+', '*')).toBeTruthy()
    expect(isConsecutiveOperator('', '+')).toBeFalsy()
})

test('randomChoiceGenerator: should generate a valid list of random characters from given list', () => {
    const choices = '123456789'
    const sampleOutput = randomChoiceGenerator(choices, 5)
    sampleOutput.forEach(v => expect(choices.includes(v)).toBeTruthy())
    expect(randomChoiceGenerator(choices, 20).length).toBe(20)
})

test('onlyIncludesChoices: should asses correctly', () => {
    const choices = ['1','2','3','4']
    expect(onlyIncludesChoices(choices, '1+2+3+4')).toBeTruthy()
    expect(onlyIncludesChoices(choices, '1432')).toBeTruthy()
    expect(onlyIncludesChoices(choices, '12345')).toBeFalsy()
    expect(onlyIncludesChoices(choices, '134')).toBeFalsy()
    expect(onlyIncludesChoices(choices, '1334')).toBeFalsy()

})