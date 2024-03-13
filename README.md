# JavaScript

## **Data types**


1. Primitives: undefined, null, number, string, boolean, symbol, bigint 
2. Non-primitives:object

**Interactions** show through a modal window (which makes every part of the screen unable to be interacted with until an action is carried out). They include:
1. Alert: displays a message/texts and an OK button. 
**Syntax** 
`alert();`

2. Prompt: displays texts, a form field, OK and cancel buttons. 
**Syntax**
````
let name = prompt('Your name is?', [default]);
alert(`You are called ${name}`);
```

3. Confirm: displays a question and on-click OK, it returns true and false if Cancel is clicked.
**Syntax** 
`let country = confirm('Are you Obidient?')`;

## Type conversions: string, boolean, number

This is used to know the data type, the _typeof_ operator is used.
**Syntax** 
```
let number = 234; // naming and assigning a variable
typeof(number); // returns the data type 
let num = string(number); //changes data type to string
```

## **Basic operators**

- An operand is what an operator is applied to
- An operator is unary if it has only one operand
- An operator is binary if it has two or more operands.
- Concatenation is done using the **+** symbol and returns the data type of the variable, however if the **+** operator is applied before an operand(where this operand is a string), it converts the data type from string to number. This is called **prepending** with + operator.

Examples

1. Short and advised method
```let num1 = '12';
let num2 = '13';
alert(+num1 + +num2); // answer is 25 
```
2. Long method
```
let num1 = '12';
let num2 = '13';
alert(Number(num1) + Number(num2));
```

##Comparison

The precedence table (contained in the [MDN site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)) helps us understand how operations are carried out based their hierachy.

Precedence table
:---:

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |