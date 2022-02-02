const { log, prompt, randomChoiceGenerator, onlyIncludesChoices } = require('./lib/util');
const { isExpressionValid } = require('./lib/validation');
const { infixToPostfix } = require('./lib/parser');
const { postfixEvaluator } = require('./lib/evaluator');
const { EXPECTED_SUM_VALUE, INVALID_EXPRESSION_MESSAGE } = require('./config/constants');

/**
 * Calculate final result from user-input
 * @param {String} userInput 
 * @returns {number}
 */
function calculateResult(userInput) {
    return postfixEvaluator(infixToPostfix(userInput))
}

/**
 * Checks whether the user provided expression(infix) conforms to program rules
 * @param {String} userInput 
 * @param {String[]} availableChoices 
 * @returns {boolean}
 */
function isCorrectExpression(userInput, availableChoices) {
    return isExpressionValid(userInput) && onlyIncludesChoices(availableChoices, userInput)
}

function main() {
    // @NOTE: to make this work as continuous prompt,
    // enclose main() call below in a loop
    const choices = randomChoiceGenerator('123456789', 4)
    // prompt for input
    log(`> solve: ${choices.join(' ')}\n`)
    const userInput = prompt('> ')
    
    // validation
    if (!isCorrectExpression(userInput, choices)) {
        log(INVALID_EXPRESSION_MESSAGE);
        return;
    }
    // parse
    let result;
    try {
        result = calculateResult(userInput);
    } catch (e) {
        log(INVALID_EXPRESSION_MESSAGE);
        return
    }

    if (result !== EXPECTED_SUM_VALUE) {
        log(`> no, this is ${result}`)
    } else {
        log(`> yes, this is indeed ${result}`)
    }
}

if (require.main === module) {
    // boot when directly called/executed
    main();
} else {
    // export when required from other files
    module.exports = { calculateResult, isCorrectExpression };
}