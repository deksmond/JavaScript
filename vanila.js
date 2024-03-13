// Variable declaration
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

// Variable mutation
var job, isMarried;
job = 'teacher';
isMarried = false;

// Type coercion
console.log(firstName + ' is a ' + age + ' year old ' + job + ' is he married? ' + isMarried);

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);


//Math operators
var year = 2021;
var ageJohn = 28;
var ageFriend = 33;
var dobJohn = year - ageJohn;
var dobFriend = year - ageFriend;
console.log(dobJohn);
console.log(dobFriend);
console.log(year + 2);
console.log(year * 2);
console.log(year / 2);

//Logical operators
var wio = ageJohn < ageFriend;
console.log(wio);

//typeof operator
console.log(typeof wio);
console.log(typeof dobFriend);
console.log(typeof 'This is a test');
var x;
console.log(typeof x);


// Operator precedence
var now = 2018;
var dobJohn = 1989;
var legalAge = 18;

//Multiple operators
var isLegal = now - dobJohn >= legalAge;
console.log(isLegal);

//Grouping
var ageJohn = now - dobJohn;
var ageMark = 35;
var averageAge = (ageJohn + ageMark) / 2;
console.log(averageAge);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


//Coding challenge 1 
var massMark, massJohn;
massMark = 90;
massJohn = 85;
var heightMark, heightJohn;
heightMark = 1.85;
heightJohn = 1.75;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

var higherBMI = bmiMark > bmiJohn;
console.log(higherBMI);


// If/else statements
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married' );
}else{
    console.log(firstName + ' will hopefully marry soon :) ');
}

var isMarried = true;
if(isMarried){
    console.log(firstName + ' is married' );
}else{
    console.log(firstName + ' will hopefully marry soon :) ');
}

// Coding challenge 1
var massMark, massJohn;
massMark = 78;
massJohn = 92;

var heightMark, heightJohn;
heightMark = 1.69;
heightJohn = 1.95;

var first = 'Mark';
var second = 'John';

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

if(bmiMark > bmiJohn){
    console.log(first + ' has a higher BMI ');
}else{
    console.log(second + ' has a higher BMI ');
}


// Boolean logic
var firstName = 'John';
var age = 20;

if(age < 13){
    console.log(firstName + ' is a boy ');
} else if(age >= 13 && age <= 19) {
    console.log(firstName + ' is  a teenager');
}else if(age > 20 && age < 30) {
    console.log(firstName + ' is  a teenager');
}else {
    console.log(firstName + ' is a man ');
}


//Tenary operator

var firstName = 'John';
var age = 22;

age >= 18 ? console.log(firstName + ' drinks beer ') : console.log(firstName + ' drinks juice. ');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if(age >= 18){
    var drink = 'beer';
}else{
    var drink = 'juice';
}

console.log(drink);


//Switch statement
var firstName = 'John';
var age = 17;
var job = 'cop';
switch(job){
    case 'teacher':
        console.log(firstName + ' teaches kids how to code. ');
        break;
    case 'driver':
        console.log(firstName + ' drives an Uber in Lisbon. ');
        break;
    case 'designer':
        console.log(firstName + ' Designs website. ');
        break;
    default:
        console.log(firstName + ' does something else '); 
}

switch(true){
    case age < 13:
        console.log(firstName + ' is a boy. ');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager. ');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man. ');
        break;
    default: 
        console.log(firstName + ' is a man. ');
}

// Coding challenge 2
var firstTeam = 'Team John';
var secondTeam = 'Team Mike';
var thirdTeam = 'Team Mary';
var teamJohn, teamMike, teamMary;
teamJohn = (89 + 120 + 103)/3;
teamMike = (116 + 94 + 123)/3;
teamMary = (97 + 134 + 105)/3;

if(teamJohn > teamMike){
    console.log(firstTeam + ' wins with ' + teamJohn + '. Flawless victory! ');   
}else if(teamMike > teamJohn){
    console.log(secondTeam + ' wins with ' + teamMike + '. Flawless victory! ');
}
else{
    console.log(firstTeam + ' and ' + secondTeam + ' are tied with a score of ' + teamJohn);
}

//Extra  bit
switch(true){
    case teamJohn > (teamMike && teamMary):
        console.log(firstTeam + ' wins with ' + teamJohn + '. Flawless victory! ');
        break;
    case teamMike > (teamJohn && teamMary):
        console.log(secondTeam + ' wins with ' + teamMike + '. Flawless victory! ');
        break;
    case teamMary > (teamJohn && teamMike):
        console.log(thirdTeam + ' wins with ' + teamMary + '. Flawless victory! ');
        break;
    default:
        console.log(' All 3 teams tied with a score of ' + teamJohn);
}


//Functions
function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirmentYear = 65 - age;
    console.log(firstName + ' would retire in ' + retirmentYear + ' years. ');
}

yearsUntilRetirement(1996, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

function ageCalculator(birthDay){
    return 2021 - birthDay;
}

var yourAge = ageCalculator(1996);
console.log(yourAge);

function retirmentInf0(dob, firstName){
    var fullAge = ageCalculator(dob);
    var retYr = 65 - fullAge;
    if(retYr > 0){
        console.log(firstName + ' retires in ' + retYr + ' years ');
    }else {
        console.log(firstName + ' is retired ');
    }
}

retirmentInf0(1996, 'John');
retirmentInf0(1948, 'Mike');
retirmentInf0(1990, 'Jane');


//Function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code ';
        case 'driver':
            return firstName + ' drives a cab in Lisbon ';
        case 'designer':
            return firstName + ' designs beautiful websites ';
        default:
            return firstName + ' does something else ';
    }
}

console.log(whatDoYouDo('designer', 'John'));
console.log(whatDoYouDo('teacher', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));


//Arrays
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1969,1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

names[1] = 'Ben';
console.log(names);
names[names.length] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('Blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
console.log(john);
john.shift();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var result = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(result);


//Coding challenge 3

const dogProperties = {
    "name": "Rufus",
    "breed": "German mastif",
    "legs": 2,
    "feeding habits": "morning, afternoon, night",
    "friends": "all breed"
}
dogProperties.name = "Ruckus";
dogProperties.happyMoments = "Snow";
dogProperties["allergies"] = "Peanut, orange, peach";
delete dogProperties.legs;
dogProperties.hasOwnProperty("friends");
//console.log(dogProperties);

function checkObj(obj, checkProp) {
    // Only change code below this line
    checkProp = "";
    obj = {
      gift: "pony",
      pet: "kitten",
      bed: "sleigh",
      city: "Seattle"
    };
    if(obj.hasOwnProperty(checkProp)){
      return obj.checkProp;
    } else{
      return "Not Found";
    }
    // Only change code above this line
  }

  //Objects (accessing, updating and deletion, nested objects and arrays, property check)
  const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  function updateCollection(records, id, prop, value){
    if(prop !== 'tracks' && value !== ''){
      records[id][prop] == value;
    } else if(prop == 'tracks' && records[id].hasOwnProperty('tracks') == false){
      records[id][prop] == [value];
    } else if(prop == 'tracks' && value !== ''){
      records[id][prop].push(value);
    } else if(value == ''){
      delete records[id][prop];
    }
    return records;
  }

  const myArray = [];
  var i = 5;

  while(i >= 0 && i <= 5){
    myArray.push(i);
    i--;
  }  

//Generating random numbers 

function randomFraction(){
    const rand = Math.random();
    return rand;
}

//Generating random whole numbers within a range
function randomNumGen(max, min){
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}

//Parsing string to integer with base(radix)
function radixParsing(str){
    const x = parseInt(str, 2);
    return x;
}

//Tenary operator
function findGreater(a,b){
    return a>b ? "a is greater" : "b is greater or equal to";
}

var combien = 0;
var name='Desmond';
combien = name.length;

var entries = [['France', 'Paris'], ['Nigeria', 'Abuja'], ['Ghana', 'Accra']];
entries[1][1];
entries.push(['Guinea', 'Conakry']);
entries.pop(1,1);
entries.shift();
entries.unshift(['South Africa', 'Cape town']);

function weightChecker(gender,weight){
    var obese = false;
    if(gender === 'male' && weight >= 75){
        console.log('You\'re overweight my nigga');
    } else if(gender === 'male' && weight <= 75){
        console.log('Proper or underweight');
    } else if(gender === 'female' && weight >= 65){
        console.log('You\'re overweight sister');
    } else {
        console.log('Proper or underweight');
    }
    return weightChecker;
}
weightChecker('female', 90);

function favMovie(year){
    switch(producer){
        case 'a':
            return 
                function quentinMovies(){
                    var firstMovie ='Inglorious Basterds';
                    var secondMovie ='Pulp Fiction';
                    var thirdMovie='The Hateful 8';
                    var fourthMovie='Kill Bill';
                    console.log(firstMovie + ' ' + secondMovie + ' ' + thirdMovie + ' ' + fourthMovie);
                }
        case 'b': 
            return 
            function a24Movies(){
                var firstMovie ='Waves';
                var secondMovie ='Shiver Baby';
                var thirdMovie='Everything, Everywhere, all at once';
                console.log(firstMovie + ' ' + secondMovie + ' ' + thirdMovie);
            }
        case 'c':
            return 'Inglorious Basterds';
        case 'd': 
            return 'Pulp Fiction';
        default: 
            return 'A24 studios is the best';
    }
}

const voterInfo = {
    'Name': 'John Don',
    'Age': 29,
    'Height': '1.90m',
    'Nationality': 'American',
    'City': 'Cincinnati',
    'State': 'Ohio',
    'Hair': {
        'colour': 'black',
        'texture': '4C',
        'feel': 'bristle'
    }
};

voterInfo.Height;
voterInfo['Name'];
voterInfo.Age = 34;
voterInfo['Address'] = '214 Bobby Allen and Worchester';
delete voterInfo['Height'];
voterInfo.HasOwnProperty('Height');
voterInfo.Hair.feel;

const movies = [
    {
        'name': 'Get out',
        'Producer': 'Jordan Peele',
        'Release year': '2019',
        'Genre': 'Thriller'
    },
    {
        'name': 'Nope',
        'Producer': 'Jordan Peele',
        'Release year': '2022',
        'Genre': 'Horror, Thriller'
    },
    {
        'name': 'Keanu',
        'Producer': 'Keagan Micheal Key',
        'Release year': '2020',
        'Genre': 'Comedy, Action'
    },
    {
        'Country': 'USA',
        'details': [
            'Key and Peele',
            'Comedy Central, Keagan Micheal Key, Jordan Peele',
            '2015/2016',
            'Comedy, Thriller, Sci-Fi, Romance, Action, Horror'
        ]
    },
];

movies[3].details[1];
Object.freeze(movies);

function currencyConv(){
    var todaysRate = 765;
    var name='Shokolobangosho';
    while(todaysRate >= 764){
        console.log('Economy currently bad');
    }
    for(let i = 0; i<=name.length; i++){
        console.log(name.length);
        for(let j = 0; j<=name[i].length; j++){

        }
    }
}

function randonGenerator(){
    var fracGen = Math.random();
    var wholeGen = fracGen * 9;
    const val = Math.floor(wholeGen);
    console.log(val);
    const fullVal = Math.floor(Math.random * 9);
    console.log(fullVal);
    const newVal = Math.floor(Math.random() * (max - min + 1)) + min;
    var familyName = 'Andrew';
    familyName !== 'Paul' ? console.log('Family name is correct') : console.log('Family name is incorrect');
}

function highestVal(val){
    var max, min = 0;
    return val > max ? max = val
            : val < min ? min = val
            : console.log('Your value is ', val);
}

const soundCheck = (vowel, a,b,...args) => {
    var val = 0;
    var title = ['John Wick'];
    var releaseDate = '2016';
    switch(vowel){
        case 'a':
        case 'e':
        case 'i':
        case '0':
        case 'u':
            return console.log('You just picked a vowel sound');
        break;
        default:
            return "This is a consonant you chose";
        break;
    }
    val = val + (a/b);
    var movieInfo = [...title, releaseDate];
    console.log(movieInfo);
};
soundCheck(1,90,3,9,39,56,32,6,3);
*/

const phoneLineDetails = [
    'Black Coffe', 
    'Dj',
    'South African',
    'Durban',
    'Polokwane'
];
var {clientName, clientJob, clientCountry, clientCity, clientVillage} = phoneLineDetails;
alert(clientCountry);
