const {
    isOperand,
    isOperator,
    isLeftParentheses,
    isRightParentheses,
    isWhiteSpace,
    isConsecutiveDigit,
    isConsecutiveOperator,
    trimStr,
} = require('./util');

/**
 * Verified whether the expression provided is valid/within rule
 * @param {String} inputExpr
 * @return {boolean}
 */

function isExpressionValid(inputExpr) {
    let char = '';
    // Needed to store left parentheses
    let parenthesesStack = [];

    // @NOTE: order of validation is important!
    for (let i = 0; i < inputExpr.length; ++i) {
        char = trimStr(inputExpr[i]);
        
        if (isWhiteSpace(char)) continue

        // multi-char validation
        if (i > 0 && isConsecutiveDigit(trimStr(inputExpr[i - 1]), char)) return false;
        if (i > 0 && isConsecutiveOperator(trimStr(inputExpr[i - 1]), char)) return false;
        // single char validation
        if (isOperand(char)) continue
        if (isOperator(char)) continue
        if (isLeftParentheses(char)) {
            parenthesesStack.push(char);
            continue
        }
        if (isRightParentheses(char)) {
            if (parenthesesStack.length > 0) {
                parenthesesStack.pop();
                continue
            }
            // imbalanced
            return false;
        }

        // unknown character detected
        return false;
    }

    // imbalanced parentheses
    if (parenthesesStack.length > 0) return false;
    // all validations passed
    return true;
}

module.exports = {
    isExpressionValid
}