// //  Non Functional

// var greet = "Welcome to "
// var exName = "frontend-techies"
// console.log(greet + exName);

// //  Functional
// function Greet(example) {
//     return "Welcome to" + example
// }
// console.log(example);



// let nums = [1000,10,100,600,52,2021,225,47,3658,80]

// let mapNum = nums.map((num) => num < 100 || num >= 1000)
// console.log(mapNum);

index = 0;
array = [1, 2, 3, 4, 5, 6];
var numbers = [45, 5, 9, 16, 25];

var over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value, index, array) {
    return value > 18;
}