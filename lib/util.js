const { readSync } = require('fs');
/** 
* Removes any leading and/or trailing whitespace from given string
 * @param {String} str 
 * @returns {String}
 */
function trimStr(str) {
    return str.trim();
}

/**
 * Checks whether a character is an operand
 * @param {String} char
 * @returns {boolean} 
 */
 function isOperand(char) {
    // will only recognize single digits,
    // multiple digits(e.g. '12') should not work
    return '123456789'.split('').includes(char);
}

/**
 * Detects if a character is an operator
 * @param {String} char 
 * @returns {boolean}
 */
function isOperator(char) {
    return '+-/*'.split('').includes(char);
}

/**
 * Detects whether a character is left parenthesese
 * @param {String} char 
 * @returns {boolean}
 */
function isLeftParentheses(char) {
    return char === '(';
}

/**
 * Detects whether a character is right parentheses
 * @param {String} char 
 * @returns {boolean}
 */
function isRightParentheses(char) {
    return char === ')';
}

/**
 * Determines whether the character provided is a whitespace
 * @param {String} char 
 * @returns {boolean}
 */
function isWhiteSpace(char) {
    if (char.trim() === '') {
        return true;
    }
    return false;
}

/**
 * Determines whether the provided characters are consecutive digit(i.e. \d+)
 * @param {String} currentChar 
 * @param {String} previousChar 
 * @returns {boolean}
 */
function isConsecutiveDigit(prevChar, currChar) {
    return isOperand(prevChar) && isOperand(currChar);
}

/**
 * Determines whether the provided characters are both operators
 * @param {String} prevChar 
 * @param {String} currChar 
 * @returns {boolean}
 */
function isConsecutiveOperator(prevChar, currChar) {
    return isOperator(prevChar) && isOperator(currChar);
}

/**
 * Generate a list of choices from given characters
 * @param {String} choices
 * @param {number} size (default: 4)
 * @returns {boolean}
 */
function randomChoiceGenerator(choices, size = 4) {
    const selectionList = choices.split('');
    const selectionListSize = selectionList.length - 1;
    return Array(size).fill(0).map(_ => selectionList[ Math.floor( Math.random() *  selectionListSize) ]);
}

/**
 * Write a string into terminal without the new-line character
 * @param {String} msg 
 * @returns {void}
 */
 function log(msg) {
    process.stdout.write(msg);
}

/**
 * Get an input string entered by user into terminal
 * @param {String} msg - an optional message to prefix the prompt with
 * @param {number} size - size of buffer(bytes) to allocate for user input
 * @returns {String}
 */
function prompt(msg = '', size = 128) {
    log(msg);
    const buffer = Buffer.alloc(size, '', 'ascii');
    const inputSize = readSync(process.stdin.fd, buffer, {});
    return trimStr(String.fromCharCode(...buffer).slice(0, inputSize));
}

/**
 * Determines whether the provided input has only the digits provided in choice
 * @param {String[]} choices 
 * @param {String} expression 
 * @returns {boolean}
 */
function onlyIncludesChoices(choices, expression) {
    if (expression.trim() === '') return false;
    const onlyDigits = expression
        .replace(/\D/g, '')
        .trim()
        .split('');
    const hasExceptions = onlyDigits.some(d => !choices.includes(d));
    const hasAllChoices = choices.every(d => onlyDigits.includes(d));
    return hasAllChoices && !hasExceptions;
}

module.exports = {
    trimStr,
    isOperand,
    isOperator,
    isLeftParentheses,
    isRightParentheses,
    isWhiteSpace,
    isConsecutiveDigit,
    isConsecutiveOperator,
    trimStr,
    randomChoiceGenerator,
    prompt,
    log,
    onlyIncludesChoices
}

