# JavaScript note

### 1. **Data types and variables**


  i. **Primitives**: undefined, null, number, string, boolean, symbol, bigint 
  ii. **Non-primitives**: object
  
  > [!TIP]
  > Undefined means not assigned and it is used for dynamic variables.
  > Null means empty
  
  #### **Variables**
  
  i. **var**
  
  ii. **let**
  
  iii. **const**
  
  **Interactions** show through a modal window (which makes every part of the screen unable to be interacted with until an action is carried out). They include:
  
  i. **Alert**: displays a message/texts and an OK button. 
  
  **Syntax** 
  
  `alert();`
  
  ii. **Prompt**: displays texts, a form field, OK and cancel buttons. 
  
  **Syntax**
  ```
  let name = prompt('Your name is?', [default]);
  alert(`You are called ${name}`);
  ```
  
  iii. **Confirm**: displays a question and on-click OK; it returns true and false if Cancel is clicked.
  
  **Syntax** 
  
  `let country = confirm('Are you Obidient?');`
  
  #### **Type conversions**: string, boolean, number
  
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

i. Short and advised method
```
let num1 = '12';
let num2 = '13';
alert(+num1 + +num2); // answer is 25 
```
ii. Long method
```
let num1 = '12';
let num2 = '13';
alert(Number(num1) + Number(num2));
```

### 3. Comparison

The precedence table (contained in the [MDN site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)) helps us understand how operations are carried out based their hierachy.

#### **Precedence table**

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

### 5. **Logical operators**

i. **OR ||**

   i. The OR operator works from left to right and also converts its operand to boolean.
   ii. When it finds the first truthy operand, it returns the original value of the operand.
   iii. If all the operands are false, it returns the last operand.

> [!NOTE]
> OR needs just one condition to be true, to return the true value(s)
> OR returns false if the value is 0, ' ', null, undefined or NaN

ii. **AND &&**

   i. AND converts all the operands for comparison and works from left to right.
   
   ii. It finds the first falsy operand and return its original value.
   
   iii. If all the operands are true, it returns the last truthy operand.

iii. **NOT !**
   
   i. The NOT operator converts the operand into boolean true/false.
   ii. It returns the inverse value.  

> [!NOTE]
> The NOT operator has the highest precedence, followed by AND then OR

iv. **NULLISH COALESCING ??**
 
   i. The nullish coalescing operator returns the first defined value. it checks if a value/variable isn't null/undefined, then returns it, else it returns the other value.
   ii. It has a low precedence level of 3 like the OR operator, so it's best to use parenthesis when using it in an expression.
   iii. It is forbidden to use ?? with || or && without parenthesis.

   **Syntax**
   
   ```
   let result = 'John';
   alert(result ?? 'Anonymous'); //John
   ```

### 6. **Loops**

i. **While(condition) {loop body}**

   The while loop takes a condition, converts it to a boolean and executes the loop body if it's true. It only runs when it is true.
   
ii. **do while**
   
   The do while loop takes and runs the instructions in the loop body at least once (whether the condition is true or false) then checks the condition, if true is reiterates aganin and again, It is used if an     
   instruction needs to be executed at least once.

   **Syntax**
   
   `do {loop body} while (condition);`

iii. **For**

   **Syntax**
   
   `For(initialization statement; conditional expression; final statement) {loop body}`
     
   The For loop is the most popular loop. The initialization statement executes first in the loop then if the conditional expression is true, it executes the loop body and iterates with the final statement. So 
   the pattern is: initialization statement -> conditional expression -> loop body -> final statement -> initialization.

   > [!NOTE]
   > All loops that are a single line statement do not require curly brackets.
     
#### **Directives**

i. **Break**

   This is used to exit a loop if it meets or doesn't meet a condition (based on your discretion). 

   **Syntax**

   `break;`

ii. **Continue**

  This stops the loops (if the condition is met or not, based on your choice) current iteration and forces the loop to start a new one (if the condition allows).

  **Syntax**

   `continue;`

  > [!WARNING]
  > Break or continue cannot be used with a ternary operator.
   

 iii. **Label**

   The label syntax helps to exit a nested loop (if a condition is met or not) using a label name and colon before the first loop the keywords 'break' or 'continue' is then used in the loop, followed by the 
    labelName.
   
   **Syntax**
   
   ```
   labelName: for(let i=0; i<=8; i++){
               for(let j=0; j<=8; j++){
                  let name = prompt('What is your name?', '');
                  if(!name) break labelName;
                  if(!name) continue labelName;
              }
            }
    alert('finished');
   ```

### 7. **The switch statement**

- The switch statement is more useful when we have lots of cases above the 'if' condition's handling.
  
- The switch value must **STRICTLY** match with the case variant to execute the instruction(s), after matching, it executes the instruction(s) until it finds the closest **break** (if it exists) else it goes to the **default** (if it exists).
  
- Cases (that strictly match the switch value) can be grouped, this is done by writing out all the cases and putting the instruction(s) in the last one.
  
- The switch and case allow arbitrary expression(s), but the type matters, as an expected value or result won't get returned if they aren't strictly equal.

  **Syntax**

  ```
  let a = 3 + 9;
  let b = 2;
  switch(a) {
   case 0:
   case 1:
   case 10:
    alert('Almost there');
    break;
   case b + 10:
     alert('Right answer');
     break;
  default:
     alert('We can place you anywhere');
     break;
  }
  ```

### 8. **Functions**

A function is a reusable piece of code that can be used anywhere, its main purpose is to avoid duplication of code. It can be created even if being reused isn't the intention.

**Syntax**

```
function functionName(param1, param2,...) {
  //function body
}
```
> [!NOTE]
> Functions carry out actions. They always return a value.

> [!IMPORTANT]
> Values passed as parameters to a function are copied to its local variables.

i. Local variables declared can only be accessed by the function where it was declared.
ii. Global variables can be accessed and used by any function. It is advised to use global variables in a minimal amount and use local variables instead.
iii. Parameters are variables declared in parenthesis when declaring a function.
iv. Argument are values used when calling the function for execution (**the argument(s) must match the amount of declared parameters**).
v. Default parameters can be used in a function, they can be manipulated to return whatever value you defined.

Example

```
function showMessage(from, text) {

  if (from == undefined || from == null) {
    from = from || 'sender information unavailable';
  }

let content = alert(`Sender: ${from}, Message: ${text}`);
  return content //Sender: undefined, Message: We are progressing 
}

showMessage(from, 'We are progressing');
```
vi. A return statement is used to give the value to the calling code. Multiple return statements can be used in a function. **If a return statement is used without a value, it exists immediately.**
vii. Functions are actions. Their names should be a verb, they must be accurate and describe what the function actually does.

  **Function expressions**

When a function is written with a variable name, parenthesis and a function body, that is referred to as a **function declaration**. When a function is assigned to a variable or the function is copied to a variable, that is a **function expression**.

Example
 ```
  let newNumber = function (){
    alert('0549335264');
  }

  //copying the function
  function oldNumber() {
    alert('Number not found');
  }
  let newNumber = oldNumber;
  newNumber();
  ```



    
  

























   
