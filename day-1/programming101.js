console.log("hello words")
console.log("hi namaste javascript")
console.log("akshay saini")
console.log("hi i am from the namaste dsa")

// -----------------------------------------------------------------------------------------------//

const a = 20;
const b = 90;

let sum = a + b;
let multiple = a * b;
let division = a - b;

console.log(sum)
console.log(multiple);
console.log(division)

// -----------------------------------------------------------------------------------//

const x = 20;
// a = 90  //not works - a is not reassing becox of the const - constant
////Re-declaration: Not allowed 
//Re - assignment: not Allowed
let y = 90;  
y = 10; 
//Re-declaration: Not allowed in same scope
//Re - assignment: Allowed
let summ = x + y;
let multiplee = x * y;
let divisionn = x - y;

console.log(summ)
console.log(multiplee);
console.log(divisionn)

// -------------------------------------------------------------------------//
let firstName = "gourav";
let lastName = "sahu";

let fullName = firstName + lastName
console.log(fullName)

// how to add space between this firstName and lastName
// string concatenation 
console.log(`${firstName} ${lastName}`) // es6

let fullNamewithspace = firstName + " " +lastName
console.log(fullNamewithspace)

//--------------------------------------------------------------------------------------------------------//

let arr = [1, 2, 3, 4, 5, "gourav", 'helllow', true, -90, false]

// indexing = 0,1,2,3,4,5,6  -- index start from 0  its and value first arr[0]

console.log(arr[0])
console.log(arr[1])
// sum of two values
console.log(arr[5] + arr[8])    // o/p - gourav-90 its convert -90 into a string

console.log(arr[11])  //o/p -  undefiend

// <-------------------------------------------->
// nested arrays 
let array = [1, 2, 3, ["jarvis", 8, [89, 0, ["mark10", "ironman", ["mark101"]]]]]

// how to get log mark101
console.log(array[3][2][2][2][0])

// how to get log jarvis
console.log(array[3][0])
