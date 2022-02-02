const { calculateResult, isCorrectExpression } = require('../index')

// @NOTE: these are provided data in TASK.md
test('should properly validate and calculate result', () => {
    // case 01:
    expect(isCorrectExpression('(4 * 3 * 2) + 1', ['1','2','3','4'])).toBeTruthy();
    expect(calculateResult('(4 * 3 * 2) + 1')).toEqual(25);

    // case 02:
    expect(isCorrectExpression('4 * 3 * (1 + 1)', ['1','2','3','4'])).toBeFalsy();
    expect(calculateResult('4 * 3 * (1 + 1)')).toEqual(24);

    // case 03: double digit exception
    expect(isCorrectExpression('12 * (1 + 1)', ['1','2','1','1'])).toBeFalsy();
    expect(() => calculateResult('12 * (1 + 1)')).toThrow();

    // case 04: un-acceptable char '!'
    expect(isCorrectExpression('(1 + 1 + 1 + 1)!', ['1','1','1','1'])).toBeFalsy();
    expect(() => calculateResult('(1 + 1 + 1 + 1)!')).toThrow();

    // case 05: exactly 24
    expect(isCorrectExpression('(7 - ( 8 / 8 )) * 4', ['8','4','7','4'])).toBeTruthy();
    expect(calculateResult('(7 - ( 8 / 8 )) * 4')).toEqual(24);
})