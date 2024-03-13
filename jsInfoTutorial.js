/*import { title } from "process";

let name = "John";
let admin;

admin = name;
alert(admin);
*/

//Conditional branching
let nationality = prompt('Where are you from?', 'Abuja, Nigeria');
alert(`You come from ${nationality}`);

let actualAge = prompt('What is your actual age?', '');
let confirmedAge = (age < 3) ? 'Hello, baby!' :
                    (age < 18) ? 'Good morning' :
                    (age < 50) ? 'Ukani' :
                    (age < 100) ? 'Greetings' :
                    'I hail thee o ancestor';

alert(confirmedAge);
//Task
let answer = prompt('What is the "Official" name of JavaScript', '');

if(answer == 'ECMAScript'){
    alert('Right!');
} else {
    alert('You don\'t know? ECMAScript');
};
//Task 2
let val = prompt('Give a random number', '');
if(val > 0){
    alert('1');
} else if(val < 0){
    alert('-1');
} else {
    alert('0');
}
//Task 3
let result = (a + b < 4) ? 'Below' : 'Over';
//Task 4 
let login;
let message = (login == 'Employee') ? 'Hello' :
                (login == 'Director') ? 'Greetings' :
                (login == '') ? 'No login' :
                '';
//Logical operators
let age1 = 10, age2 = 15, age3 = 50;
if(age1 == 10 || age2 == 20 || age3 == 50){
    alert('You are in your prime');
};
//Task 
let age4 = 14, age5 = 90;
if(!age4 && !age5){
    alert('You are included')
};
//Task
<!DOCTYPE HTML>
<html>
<head>
</head>

<body>
    <script>
        'use strict';
        let loginInfo = prompt('Who is there?', '');
        if(loginInfo === 'Admin'){
            let passwordRequest = prompt('Enter your password', '');
            if(passwordRequest === 'TheMaster'){
                alert('Welcome!');
            }
        } else if(loginInfo !== 'Admin'){
            alert('I dont know you');
        } else {
            alert('Cancelled');
        }
    </script>
</body>
</html>

//Logical operators
let discount = true;
let status = 'senior';
let age;
if(status && age >= 65){
    prompt('Enter your civic status and age', '');
    return discount;
} else if(!senior || age <= 65){
    return 'You are not eligble for a discount';
}

//Existing a loop, moving to the next iteration, existing a nested loop
//Break
for(let i = 0; i > 0; i++){
    let age = prompt('What is your age?', '');
    if(age < 0) break;
}
//Continue
let civicStatus = 'veteran';
while(civicStatus){
    let serviceYears;
    if(serviceYears <= 10) continue;
}
//label
exitLoop: for(let i = 0; i >= 0; i++){
            for(let j = 0; j >= 0; j++){
                let posInfo = +prompt(`Coordinate values are ${i} ${j}`, '');
                if(!posInfo) break exitLoop;
            }
}
//switch statement
//group cases 
let eduLevel = '1000x dev';
switch(eduLevel){
    case 'Primary school':
        return 'Too young to be hee';
        break;
    case 'Secondary school':
        let minorCheck = confirm('Are you a minor?');
        if(!minorCheck){
         let age = prompt('Enter your age to confirm', '');
         (age >= 18) ? 'Welcome to the platform, enjoy your time here with us' : 'A few more years, then you can join us';
        }
        break;
    case 'First degree':
    case 'Intern':
    case 'Junior dev':
    case 'Intermediate dev':
    case 'Senior dev':
    case '1000x dev':
        return 'abeg cut soap for us :)';
        break;
    default: 
        return 'You followed the non traditional way of life. Commendable!';
        break;
        
}
//Type matters + arbitray expressions
let pos = 2 + 5;
let b = 1;
switch(pos){
    case 1:
        alert('Incorrect');
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        alert('Also incorrect');
        break;
    case b + 6 :
        alert('Nearly killed this bird! Congrats!!');
        break;
    default:
        return 'Sorry we didn\'t find where you fall in';
        break;
}
//Functions
//basic
function trackInfo(from, text){
    alert(from + ': ' + text);
}
trackInfo('Goodhope', 'retry');
//using default parameters
function showMessage(from, text){
    if(from == undefined || from == null){
        from = from || undefined;
    }
    let content = alert(`Sender: ${from}, Message: ${text}`);
    return content;
}
showMessage(null, 'We are progressing');
//Return statement in a function 
function legalAge(age){
    if(age >= 18){
        return true;
    } else {
        return 'Please come with a supervisor or get permission from your parents';
    }
    let age = +prompt('How old are you?', '');
}

if(legalAge(age)){
    return 'Access granted';
} else {
    return 'Access denied';
}

function driverPermit(age){
    if(!legalAge(age)){
        return 'You are not qualified for a license';
    } else {
        'Your license is ready!':
    }
}

function showPrimes(n){
    nextNumber: for(let i = 2; i < n; i++){
                    for(let j = 2; j < i; j++){
                      if(i % j == 0) continue nextNumber;   
                    }
                    return (i);
                }
} 

//Function expressions

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no();
}

function positiveResponse(){
    alert('Yes, you are!');
}

function negResponse(){
    alert('No, you are not');
}

ask("Are you Nigerian?", positiveResponse, negResponse);


let age = prompt('How old are you ?', 18);

let reply;

if (age < 18) {
        reply = function(){
            alert('You are under age');
        };
    }
    else {
        reply = function(){
            alert('Welcome!');
        };
    }
reply();

let age = prompt('How old are you ?', 18);
let response = (age < 18) ? function(){ alert('You are under age');}
                          : function(){alert('Welcome!');};

//Arrow functions
//one line
let newFunction = (arg1, arg2, arg3) => arg1 * arg2 / arg3;
//multi line 
let newFunc = (arg1, arg2, arg3, arg4) => {
    let result = (arg1 + arg2) / arg3;
    return result;
};

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

let ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert('You agreed'),
    () => alert('You canceled the execution.')
);

//Coding style 
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;  
  }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n <= 0) {
  alert(`Power ${n} is not supported, 
    please enter an integer number greater than zero`);
} else {
  alert( pow(x,n) )
}

//Practice 

function calculateMathTable(num){
    let response;
    for (let i = 1; i <= num; i++) {
        response = num * i;
    }
    alert(response);
}
calculateMathTable(9);