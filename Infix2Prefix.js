/*
 * @Name: Infix2Prefix JS
 * @Author: Max Base
 * @Date: 2022-11-05
 * @Class: Data Structure, Dr. Mahsa Soheil Shamaee
 * @Repository: https://githun.com/basemax/Infix2Prefix
 */

const convert_infix_to_prefix = (infix) => {
    // Const Variables
    const operators = {
        "^": 4,
        "*": 3,
        "/": 3,
        "%": 3,
        "+": 2,
        "-": 2,
        "(": 1,
        ")": 1
    };

    // Variables
    let stack = [];
    let prefix = [];

    // Functions
    const is_operator = (c) => c in operators;
    const is_digit = (c) => c >= '0' && c <= '9';
    const is_identifier = (c) => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    const is_space = (c) => c == ' ';
    const is_left_parenthesis = (c) => c == '(';
    const is_right_parenthesis = (c) => c == ')';
    const is_left_associative = (c) => c == '+' || c == '-' || c == '*' || c == '/' || c == '%';
    const is_right_associative = (c) => c == '^';
    const is_associative = (c) => is_left_associative(c) || is_right_associative(c);
    const is_higher_precedence = (c1, c2) => {
        if (is_left_associative(c1) && operators[c1] == operators[c2]) return true;
        return operators[c1] > operators[c2];
    };

    // Main Body
    for (let i = 0; i < infix.length; i++) {
        let c = infix[i];
        if (is_digit(c)) {
            let number = c;
            while (i + 1 < infix.length && is_digit(infix[i + 1])) {
                number += infix[i + 1];
                i++;
            }
            prefix.push(number);
        } else if (is_identifier(c)) {
            let identifier = c;
            while (i + 1 < infix.length && is_identifier(infix[i + 1])) {
                identifier += infix[i + 1];
                i++;
            }
            prefix.push(identifier);
        } else if (is_space(c)) {
            continue;
        } else if (is_operator(c)) {
            while (stack.length > 0 && is_higher_precedence(stack[stack.length - 1], c)) {
                prefix.push(stack.pop());
            }
            stack.push(c);
        } else if (is_left_parenthesis(c)) {
            stack.push(c);
        } else if (is_right_parenthesis(c)) {
            while (stack.length > 0 && !is_left_parenthesis(stack[stack.length - 1])) {
                prefix.push(stack.pop());
            }
            stack.pop();
        }
    }

    while (stack.length > 0) {
        prefix.push(stack.pop());
    }

    return prefix.reverse();
};

// Example
console.log(convert_infix_to_prefix("5 + 6 * 7"));
// [ '+', '*', '7', '6', '5' ]
console.log(convert_infix_to_prefix("(((a/b)-c) + (d*e))- (a*c)"));
// [
//     '(', '(', '(', ')', ')',
//     '(', ')', ')', '(', ')',
//     '*', 'c', 'a', '-', '*',
//     'e', 'd', '+', '-', 'c',
//     '/', 'b', 'a'
// ]
console.log(convert_infix_to_prefix("(k+l)-(m*n)+(o^p)*w/v/u*t+q"));
// [
//     '(', ')', '(', ')', '(', ')',
//     '+', 'q', '*', 't', '/', 'u',
//     '/', 'v', '*', 'w', '^', 'p',
//     'o', '+', '*', 'n', 'm', '-',
//     '+', 'l', 'k'
// ]
console.log(convert_infix_to_prefix("a+b*(c^d-e)^(f+g*h)-i"));
// [
//     '(', ')', '(', ')', '-',
//     'i', '+', '*', 'h', 'g',
//     'f', '^', '-', 'e', '^',
//     'd', 'c', '+', '*', 'b',
//     'a'
// ]
