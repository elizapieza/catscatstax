// let pi = 3.14159; initial set up
const PI = 3.14159; //constant = ALL CAPS
// PI = 420.69; //error
let radius;
let circumference;

//User input- radius
radius = window.prompt("Enter the radius of a circle: ");

//convert radius to a number
radius = Number(radius);

//calculate circumference
circumference = 2 * PI * radius;

//display circumference
console.log("The circumference is: " + circumference);