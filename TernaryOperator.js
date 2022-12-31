// Ternary Operator
var age = 18;
//var type = (age >= 18) ? "Adult" : "Child";

//Nested if else with ternary operator
var type = (age >= 18) ? "Adult" : age < 10 ? "child" : "young";


// if(age >= 18)
// {
//     type = "Adult";
// }
// else{
//     type = "Child";
// }

console.log(type);


var isLoggedIn = true;
var access = isLoggedIn;
console.log(access);