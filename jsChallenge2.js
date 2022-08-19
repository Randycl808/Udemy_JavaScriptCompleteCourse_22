// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console,saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK 😀

//Data from Challenge #1
const marcWeightKg = 78;
const marcHeightM = 1.69;

const johnWeightKg = 92;
const johnHeightM = 1.95;

const BMIMarc = marcWeightKg / marcHeightM ** 2;
const BMIJohn = johnWeightKg / (johnHeightM * johnHeightM);

const marcHigherBMI = BMIMarc > BMIJohn;
//^True
const johnHigherBMI = BMIJohn > BMIMarc;
//^False

console.log(BMIMarc, BMIJohn, marcHigherBMI, johnHigherBMI);

// Challenge #2 Code

if (BMIMarc > BMIJohn) {
  console.log(`Marc's BMI (${BMIMarc}) is higher than John's ${BMIJohn}`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marc's BMI ${BMIMarc}`);
}
