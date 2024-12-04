let age = window.prompt ("How old are you?");
console.log("Before conversion, age is a: " + typeof age);

//convert string to number
age = Number(age);
console.log("After conversion, age is a: " + typeof age);

//incrememnt age by 1
age += 1;

console.log("Happy Birthday! You are now " + age + " years old!");

//EXERCISE 2
//______________________________//

//convert string to number
let x = Number("3.14");
console.log(x);
console.log("Type of x: " + typeof x);

//convert number to string
let y = String(3.14);
console.log(y);
console.log("Type of y: " + typeof y);

//convert empty string to boolean
let z = Boolean("");
console.log(z);
console.log("Type of z: " + typeof z);

//convert non-empty string to boolean
z = Boolean("pizza");
console.log(z);

//EXERCISE 3
//______________________________//

let example = "123";
console.log("Type of 'example' before conversion: " + typeof example);

example = Number(example);
console.log("Type of 'example' after conversion: " + typeof example);