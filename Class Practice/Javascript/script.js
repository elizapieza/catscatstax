let fullname = "Mariah Cox";
let age = 22;
let isStudent = true;
let price = 19.99
let favoriteFood = "Pizza";

//Console.log- prints to console
console.log(fullname);
console.log(age);
console.log(isStudent);
console.log(`Your favorite food is ${favoriteFood}`);
console.log(`Your name is ${fullname}, you are ${age} years old, and your favorite food is ${favoriteFood}`);
//console.log prints the type of variable to console
console.log(`Type of fullname: ${typeof fullname}`);
console.log(`Type of age: ${typeof age}`);
console.log(`Type of isStudent: ${typeof isStudent}`);

document.getElementById("P1").textContent = `Your name is ${fullname}`;
document.getElementById("P2").textContent = `Your are ${age} years old`;
document.getElementById("P3").textContent = `Enrolled: ${isStudent}`;
document.getElementById("P2").textContent = `You are ${age} years old and the price is $${price}`;

if (isStudent) {
document.getElementById("P3").textContent = "You are a student.";
}
else {
document.getElementById("P3").textContent = "You are not a student.";
}