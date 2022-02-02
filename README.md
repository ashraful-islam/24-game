# Technical Assignment

A solution to the [24 Game](https://en.wikipedia.org/wiki/24_Game)

## Problem

Given a list of four single digits(e.g. 1,2,3,4) form an expression, that results up to `24` exactly.

### Solution Rules

- Only the following operators/functions are allowed: multiplication, division, addition, subtraction  
- Division should use floating point or rational arithmetic, etc, to preserve remainders.  
- Brackets are allowed, if using an infix expression evaluator.  
- Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).  
- The order of the digits when given does not have to be preserved.

### Additional Assumptions

- All digits provided in the choice(list of 4 digits) must be used
- No extra digits outside the choice(list of 4 digits) can be used
- The result of user-given expression must always be 24
- Duplicate usage is allowed (i.e. same digit can be used multiple times)
- User provides infix expressions

## Design

Following design decisions had been made:

- user provided expression is validated
- expression (if valid) is converted to postfix form
- postfix expression is parsed for final result

## Build

The project is built using *JavaScript* running on *Node.js*

Generally following components are required to properly run the project:

- [Node.js](https://nodejs.org/en/)
- [NPM.js](https://www.npmjs.com/)
- Active internet connection to install the dependencies

The project does not use any additional/external libraries *except for testing framework*,
hence a building is not required. 

## Usage

To use this project,

- clone from repository
- run the command `npm start`
- the program will show choice of 4 digits
- enter an expression
- the program will show a result and exit

For example, following is a console-dump of the program running

```bash
$ npm start
> solve: 1 2 3 4
> 4 * 3 * 2 * 1
> yes, this is indeed 24

```

## Testing

To run the provided tests, run the following command

```
$ npm test
```

Usually, all tests should pass and the process should exit normally.
If any tests fail, there should be appropriate errors displayed.


## Attributions

Following external libraries or solutions has been used

- [Jest.js](https://jestjs.io/docs/getting-started)
- [High Precision Calculation In JS](https://stackoverflow.com/a/70801249)
- [Infix To Postfix Conversion Algorithm](https://www.web4college.com/converters/infix-to-postfix-prefix.php)
- [Postfix Expression Evaluation Algorithm](https://www.collegenote.net/curriculum/data-structures-and-algorithms/36/179/)
