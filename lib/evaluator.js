const Stack = require('./stack');
const { isOperand, isOperator, isWhiteSpace, trimStr } = require('./util');

// Operator Strategies
const operatorFns = {
    '+' : (operandA, operandB, precision) => {
        return Math.round((operandA + operandB) * Math.pow(10, precision)) / Math.pow(10, precision);
    },
    '-' : (operandA, operandB, precision) => {
        return Math.round((operandA-operandB) * Math.pow(10, precision)) / Math.pow(10, precision);
    },
    '*' : (operandA, operandB, precision) => {
        return Math.round((operandA * operandB) * Math.pow(10, precision)) / Math.pow(10, precision);
    },
    '/' : (operandA, operandB, precision) => {
        return Math.round((operandA / operandB) * Math.pow(10, precision)) / Math.pow(10, precision);
    },
}

/**
 * Performs mathematical operation on given operands
 * @NOTE: precision is preserved up-to 8(arbitray) places
 * @Attribution: https://stackoverflow.com/a/70801249
 * @param {number} operandA 
 * @param {number} operandB 
 * @param {String} operator
 * @param {number} precision (default: 8)
 * @returns {number}
 */
function performOperation (operandA, operandB, operator, precision = 8) {
    if (!Reflect.has(operatorFns, operator)) throw new Error(`Invalid operator detected ${operator}`);
    return operatorFns[operator](operandA, operandB, precision);
}

/**
 * Evaluates a postfix expression into result
 * @Attribution: https://www.collegenote.net/curriculum/data-structures-and-algorithms/36/179/
 * @param {String} postfixExp
 * @returns {number}
 */
function postfixEvaluator(postfixExp) {

    const stack = new Stack();
    const chars = postfixExp.split('');

    let c = '';
    let a = 0;
    let b = 0;
    for (const char of chars) {
        c = trimStr(char);

        if (isWhiteSpace(c)) continue;

        if (isOperand(c)) {
            stack.push(parseInt(c, 10));
            continue;
        }

        if (isOperator(c)) {
            b = stack.pop();
            a = stack.pop();
            stack.push(performOperation(a, b, c));
        }
    }

    const finalResult = stack.pop();

    if (!stack.isEmpty()) throw new Error('Invalid or incomplete postfix expression provided');

    // @NOTE: will lose some precision
    return Math.round(finalResult);
}

module.exports = { postfixEvaluator }