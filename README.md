# Infix to Prefix

This is a simple Infix to Prefix converter written in Javascript.

### Infix

Infix notation is the most common way of writing mathematical expressions. It is also known as the standard notation or the usual notation. Infix notation is used in algebra, logic, and computer programming.

### Prefix

Prefix notation is a way of writing mathematical expressions in which the operator comes before the operands. It is also known as Polish notation, because it was first used in Poland. Prefix notation is used in computer programming and in some branches of mathematics.

## Examples

```javascript
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
```

Copyright (c) 2022, Max Base
