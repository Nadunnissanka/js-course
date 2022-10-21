/* let js = 'amazing';
if (js === 'amazing') {
  alert('Hello World');
  document.getElementById('header').style.color = "#101010";
}
else {
  alert('You suck!')
}

let firstName = "Nadun";
console.log(firstName);

let lastName = "Nissanka";
// [``] is used for template strings
console.log(`My name is ${firstName} ${lastName}`); */


//Code Challenge 01
// test data set 01
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let bmiValue = (massVal, heightVal) => massVal/heightVal ** 2;
markBMI = bmiValue(markMass, markHeight);
johnBMI = bmiValue(johnMass, johnHeight);
console.log(`Mark's BMI value: ${markBMI}`);
console.log(`John's BMI value: ${johnBMI}`);

let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  markHigherBMI = true;
  console.log(`Mark's BMI is high: ${markHigherBMI}`)
} else {
  markHigherBMI = false;
  console.log(`Mark's BMI is high: ${markHigherBMI}`)
}
