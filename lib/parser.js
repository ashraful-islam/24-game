const {
    isOperand,
    isOperator,
    isLeftParentheses,
    isRightParentheses,
    isWhiteSpace,
    trimStr,
} = require('./util');

const Stack = require('./stack');

/**
 * Returns an integer value indicating operator precedence
 * Higher value means higher precedence
 * @param {String} operator 
 * @returns {number}
 */
function operatorPrecedence(operator) {
    if (operator === '*' || operator === '/') return 2;
    if (operator === '+' || operator === '-') return 1;
    // unknown case, should never reach here
    return 0;
}

/**
 * Converts an infix expression to postfix expression
 * @Attribution: https://www.web4college.com/converters/infix-to-postfix-prefix.php
 * @param {String} infixExpr 
 * @returns {String}
 */
function infixToPostfix(infixExpr) {
    const stack = new Stack();
    let c = '';
    let tmp = '';
    let postfixExpr = '';
    let infixChars = infixExpr.split('');
    // enclose the whole expression for less weird loops
    stack.push('(');
    infixChars.push(')');
    
    for (const char of infixChars) {
        c = trimStr(char);
        
        if (isWhiteSpace(c)) continue;

        if (isLeftParentheses(c)) {
            stack.push(c);
            continue;
        }

        if (isOperand(c)) {
            postfixExpr += c;
            continue;
        }

        if (isOperator(c)) {
            
            if (stack.isEmpty()) {
                stack.push(c);
                continue;
            }
            while (isOperator(stack.peek())&& operatorPrecedence(stack.peek()) >= operatorPrecedence(c)) postfixExpr += stack.pop();
            stack.push(c);
            continue;
        }

        if (isRightParentheses(c)) {
            while (!isLeftParentheses(stack.peek())) {
                postfixExpr += stack.pop();
            }
            // remove one left parentheses
            stack.pop()
            continue;
        }
        // should never reach here
        throw new Error('Invalid expression detected with imbalanced parantheses');
    }

    // stack must be empty at this point
    if (!stack.isEmpty()) {
        throw new Error('Incomplete or invalid infix expression detected');
    }
    return postfixExpr.trim();
}

module.exports = { infixToPostfix }