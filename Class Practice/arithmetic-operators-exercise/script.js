// variable declaration
let students = 30; // number of students
let extraStudents = 0; // remainder when dividing
let result = 0; // store result

// log initial values
console.log("Initial number of students:", students);

//updating html
document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;
document.getElementById("extraStudents").textContent = `Extra Students: ${extraStudents}`;
document.getElementById("result").textContent = `Result: ${result}`;

//adding student
students = students + 1;
console.log("After adding one student:", students);
document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//removing student
students = students - 1;
console.log("After removing one student:", students);
document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//doubling students
students = students * 2;
console.log("After doubling students:", students);
document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//dividing students
students = students / 2;
console.log("After dividing students:", students);
document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//students squared
students = students ** 2;
console.log("Students squared:", students);
document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//Students cubed
students = students ** 3;
console.log("Students cubed:", students);
document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//modulus operator
students = 31;
extraStudents = students % 3; //extra students = 1
console.log(`Students: ${students}, Extra Students (students % 3): ${extraStudents}`);
document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;
document.getElementById("extraStudents").textContent = `Extra Students: ${extraStudents}`;

//reset students
students = 30;
console.log("Students reset to:", students);
document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//Augmented addition
students += 1; //+1 increment
console.log("After students += 1:", students);

students += 2; //+2 increment
console.log("After students += 2:", students);

document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//Augmented subtraction
students -= 1; //-1 decrement
console.log("After students -= 1:", students);

document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//Augmented multiplication
students *= 2; //*2 multiplication
console.log("After students *= 2:", students);
document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//Augmented division
students /= 4; // /4 division
console.log("After students /= 4:", students);
document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//Augmented exponents
students **= 2; // **2 exponent
console.log("After students **= 2:", students);

document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;

//Augmented modulus
students = 30;
students %= 2; //students at 0
console.log("After students %= 2:", students);

document.getElementById("studentsCount").textContent = `Number of Students: ${students}`;
