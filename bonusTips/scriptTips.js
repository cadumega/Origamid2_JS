// Declaring Variables
let firtName;
let lastName;
let surName = 'beast';

let firstName, lastName, surName = 'beasts';


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

// Ternary Short For Loop
const languages = ["html", "css", "js"];

for (let i = 0; i < languages.length; i++) {
    const language = languages[i]
    console.log(language);
}

for (let language of languages) console.log(language);


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
function Addition(a,b) {
    console.log("Addition", a + b);
}

addition = (a,b) => console.log("Addition", a + b);


// Identical Keys and Values
const userDetails = {
    nickname: nickname,
    email: email,
    age: age,
    location: location,
}

const userDetails = { nickname, email, age, location}

// Accepting multiple options
let color = 