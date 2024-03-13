# JavaScript note

### 1. **Data types and variables**


1. **Primitives**: undefined, null, number, string, boolean, symbol, bigint 
2. **Non-primitives**: object

> [!TIP]
> Undefined means not assigned and it is used for dynamic variables
> Null means empty

**Variables**

1. **var**
2. **let**
3. **const**

- **Interactions** show through a modal window (which makes every part of the screen unable to be interacted with until an action is carried out). They include:
1. **Alert**: displays a message/texts and an OK button. 

**Syntax** 

`alert();`

2. **Prompt**: displays texts, a form field, OK and cancel buttons. 

**Syntax**
```
let name = prompt('Your name is?', [default]);
alert(`You are called ${name}`);
```

3. **Confirm**: displays a question and on-click OK; it returns true and false if Cancel is clicked.

**Syntax** 

`let country = confirm('Are you Obidient?');`

**Type conversions**: string, boolean, number

This is used to know the data type. The _typeof_ operator is used.

**Syntax** 

```
let number = 234; // naming and assigning a variable
typeof(number); // returns the data type 
let num = string(number); //changes data type to string
```

### 2. **Basic operators**

- An operand is what an operator is applied to
- An operator is unary if it has only one operand
- An operator is binary if it has two or more operands.
- Concatenation is done using the **+** symbol and returns the data type of the variable, however, if the **+** operator is applied before an operand(where this operand is a string), it converts the data type from string to number. This is called **prepending** with + operator.

Examples

1. Short and advised method
```
let num1 = '12';
let num2 = '13';
alert(+num1 + +num2); // answer is 25 
```
2. Long method
```
let num1 = '12';
let num2 = '13';
alert(Number(num1) + Number(num2));
```

### 3. Comparison

The precedence table (contained in the [MDN site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)) helps us understand how operations are carried out based their hierachy.

**Precedence table**

| Precedence | Name | Sign |
| :---         |     :---:      |          ---: |
| 14   | Unary addition     | +    |
| 14     | Unary substraction       | -      |
| 13   | Exponential     | **    |
| 12     | Multiplication       | *      |
| 12   | Division     | /    |
| 11     | Addition       | +      |
| 11   | Subtraction     | -    |
| '     | '       | '      |
| '   | '     | '    |
| 2     | Assignment       | =      |

> [!NOTE]
> _JavaScript follows the BODMAS rule meaning, if parenthesis is used in an equation/instruction, precedence is given to it first._

### 4. **Conditional branching "if"**

A condition can be preset before the variable is used in the if statement.

Example

```
let cond = (age < 81);
if(cond) {
 //condition(s)
};
```

- A **ternary operator** is called so because it has 3 operands, it also accepts multiple _elseif_ cases (It is advised to write every case in a different line for readability sake).
- It is advised to put the condition(s) in parenthesis, whether using the if statement or a ternary operator.
- The if statement works with truthy or falsy values. Zero 0, an empty string '', null. undefined and NaN  are falsy values. Every other kind of values are truth.

> [!IMPORTANT]
> If we need to execute just one condition or another, we use the ternary operator. If we need to execute several branches of code, we use the if statement.


  
