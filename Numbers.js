const myNumber = 42;
const myFloat = 42.01;
const myFloat2 = 42.0;
const myString = "42";
console.log(myNumber == myFloat);
console.log(myNumber == myFloat2);
console.log(myNumber == myString);
console.log(myString + 3);
console.log(Number(myString) == myNumber);// converted string into number.
console.log(Number(myString) + 3);
console.log(Number.isInteger(myFloat));
console.log(Number.parseInt(myString));
console.log(typeof myFloat.toString());
console.log(Number('dave'));