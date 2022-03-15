////////////////////////////
//     Challenge 1
//       OBJECTS
////////////////////////////
// Make an obj named myObj with three properties: foo, bar, and baz.
// give foo the value "hello".
// give bar the value "world".
// and give baz the value true.

const myObj = {
  foo: 'hello',
  bar: 'world',
  baz: 'true'
}

console.log(myObj)

////////////////////////////
//     Challenge 2
////////////////////////////
// make an object named myNestedObj
// give it a property named outer with the string "outer value" as its value
// and a property innerObj with the value of an object
// give this innerObj a property "inner" with the value "inner value"


const myNestedObj = {
  outer: 'outer value',
  innerObj: {inner: 'inner value'}
}

console.log(myNestedObj);


////////////////////////////
//     Challenge 3
////////////////////////////
// create an object named team with two properties, partner1 and partner2
// write a function sayTeamNames that accepts a single parameter teamObj
// have that sayTeamNames log both partner names separated by ' and '
// call sayTeamNames with your team object

const team = {
  partner1: 'Rea',
  partner2: 'Carolyn'
}

const sayTeamNames = Object.values(team)
console.log(`${sayTeamNames[0]} and ${sayTeamNames[1]}`);

////////////////////////////
//     Challenge 4
////////////////////////////
//Display the message contained in myLoopedObj by logging each property value using a for...in loop

const myLoopedObj = {
  key1: 'wow',
  key2: 'you',
  key3: 'did',
  key4: 'it!'
};

let arr =[];
for (let key in myLoopedObj){
  arr.push(myLoopedObj[key])
}
console.log(arr);

////////////////////////////
//     Challenge 5
////////////////////////////
// Log the result of using Math.floor(1.5) and Math.floor(2.3) to see what it does
// log the result of calling Math.ceil(1.5) and Math.ceil(2.3) to see what it does
// Math.random() returns a random number from 0-1, log the result of calling it twice
// Math.sign(num) returns a 1 if a number is positive, 0 if a number is zero, and -1 if a number is negative. log the result of calling Math.sign on a negative number and a positive number
// Math.max(num1, num2, ..etc) will return the higher number, log the result of calling Math.max(10, 3)
// Math.min(num1, num2, ...etc) will return the smallest of all the numbers passed in. Log the result of calling Math.min() with three numbers of your choosing
// Math.pow(a, x) will return the result of a to the xth power, log the result of 4 to the 2nd power

console.log(Math.floor(1.5))  // 1
console.log(Math.floor(2.3))  // 2
console.log(Math.ceil(1.5))  // 2
console.log(Math.ceil(2.3))  // 3
console.log(Math.random()) // 0.92 returns  random num from 0-1
console.log(Math.random()) // 0.73
console.log(Math.sign(-10))  // returns 1 if  +num, 0 if num=0, and -1 if -num
console.log(Math.max(-100,10,20))   // 20 
console.log(Math.min(-100, 10, 20))   // -100
console.log(Math.pow(2, 10))  // 2 to the 10th power =1024)

////////////////////////////
//     Challenge 6 
//				ARRAYS
////////////////////////////
//make an array named myFirstArray and give it three elements

const myFirstArray =['one', 'two', 'three']

console.log(myFirstArray);

////////////////////////////
//     Challenge 7
////////////////////////////
//use the length property to log the last item in someArray. 
const someArray = [0,1,2,3,4,'you found me!'];

console.log(someArray[someArray.length-1])

////////////////////////////
//     Challenge 8
////////////////////////////
//Use a for loop to print out the array values in someArray

for(let i=0; i<someArray.length; i++){
  console.log(someArray[i])
}

////////////////////////////
//     Challenge 9
////////////////////////////
//Log the values of wordArr using a for... of loop

const wordArr = ['i', 'have', 'some', 'stings', 'inside', 'me'];
for(let value of wordArr) {
  console.log(value);
}

////////////////////////////
//     Challenge 10
////////////////////////////
//use array methods to solve the ff:

const changeMe = ['shiftMe', 'leaveMe', 'popMe'];
// call the array methods=pop, push, shift, unshift, then uncomment the last line to check your answer
// call pop and log the result
  changeMe.pop()
// console.log()
  console.log(changeMe)
// call push with the string "pushMe"
  changeMe.push("pushMe")  
// call shift and log the result
  changeMe.shift()
// console.log()
  console.log(changeMe)
// call unshift with the string "unshiftMe"
  changeMe.unshift("unshiftMe")
  console.log(changeMe)

////////////////////////////
//     Challenge 11
////////////////////////////
//Uncomment the lines and try and predict what will be return in the three equality expressions. Then in part two, slice the array and save each half in a variable

const a = [1,2,3];
const b = a;
console.log("array a is equal to array b?", a == b) // what will this return? //true
const c = [1,2,3];
console.log("array a is equal to array c?", a == c) // what will this return? //false
const d = a.slice(); 
console.log("array a is equal to array d?", a == d) // what will this return? //false



const sliceMe = ["first","half", "second", "half"];
const firstHalf = sliceMe.slice(0,2)
const secondHalf = sliceMe.slice(2)
console.log(firstHalf);
console.log(secondHalf);

////////////////////////////
//     Challenge 12
////////////////////////////
// Uncomment the first lines of code and try and predict how the array will change
// Then, use the .splice() method to fix the two arrays

const arrA = [0,1,"remove me!", 2, 3];
arrA.splice(2,1); //remove me!
console.log(arrA); //[0,1,2,3]
arrA.splice(1,1,"one"); [1]
console.log(arrA); //[0,'one',2,3]



// fix the arrays
const numCount = [0, 1, "two", "three", 4];
numCount.splice(2,2,2,3)
console.log(numCount);
const wordCount = ["zero", "one", 2, 3, "four"];
wordCount.splice(2,2,'two', 'three')
console.log(wordCount);
