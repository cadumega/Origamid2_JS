// Declaring Variables
let firtName;
let lastName;
let surName = 'beast';

let firstName, lastName, surName = 'beasts';
console.log('Teste');

// Ternary Operator
let answer, value = 15;

if (value % 2 == 0) {
    answer = "Number is even"
} else {
    answer = "Number is not even"
}

let answer = value % 2 == 0 ? "Number is even" : "Number is not even"


let age = 19;
let canDrive = age > 16 ? 'yes' : 'no';

let age2 = 18;
let canDrive2;
if (age2 > 16) {
    canDrive2 = 'Yes'
} else {
    canDrive2 = 'No'
}

const isDiet = false
let food = isDiet ? "Salad" : 'Pizza'
console.log(`I will eat ${food}.`);  // I will eat Pizza



let color = selectedColor || 'Color is not selected'


let color
if (selectedColor) {
    color = selectedColor
} else {
    color = 'Color is not selected'
}




// Ternary Short For Loop
const languages = ["html", "css", "js"];

for (let i = 0; i < languages.length; i++) {
    const language = languages[i]
    console.log(language);
}

//
for (let language of languages) console.log(language);

//Numeros maiores que 1.000 e menores que 100.
let nums = [1000,10,100,600,52,2021,225,47,3658,80]

for(let value of nums) {
    if(value < 100 || value >= 1000) {
        console.log(value);
    }
}
//short
let mapNum = nums.map((num) => num < 100 && num >= 1000)
console.log(mapNum);

// Template Literals
const fullName = "Carlos Lopes";
const timeOfDay = "afternoon";

const greeting = "Hello" + fullName + ", I wish you a good " + timeOfDay + "!";
const greeting = `Hello ${fullName}, I wish you a good ${timeOfDay}!`


// Assigment Operator
a = a + b; a += b;
a = a - b; a -= b;

// Object Array Notiation
let arr = new Array();
arr[0] = "html";
arr[1] = "css";
arr[2] = "js";

let arr = ["html", "css", "js"]

// Arrow Function
function Somar(a, b) {
    console.log("Somar", a + b);
}

Somar = (a, b) => console.log("Somar", a + b);


// Identical Keys and Values
const userDetails = {
    nickname: nickname,
    email: email,
    age: age,
    location: location,
}

const userDetails = { nickname, email, age, location }

// Filter Unique value 
var numers = [ 45,5,9,16,25];
var over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value,index,array) {
    return value > 18;
} //45,25