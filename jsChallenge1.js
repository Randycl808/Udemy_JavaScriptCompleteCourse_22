//Udemy: The Complete JavaScript Course 2022: From Zero to Expert!
//Code Challenge: #1

// JavaScript Fundamentals – Part 1
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark and John's mass and height in variables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. Create a Booleanvariable 'markHigherBMI'containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

//Data 1
const marcWeightKg = 78;
const marcHeightM = 1.69;

const johnWeightKg = 92;
const johnHeightM = 1.95;

const BMIMarc = marcWeightKg / marcHeightM ** 2;
const BMIJohn = johnWeightKg / (johnHeightM * johnHeightM);

const marcHigherBMI = BMIMarc > BMIJohn;
//^True
const JohnHigherBMI = BMIJohn > BMIMarc;
//^False

console.log(BMIMarc, BMIJohn, marcHigherBMI, JohnHigherBMI);
