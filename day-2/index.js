function printHellowWorld() {
 console.log("hellow world")   
}

printHellowWorld()

// <------------------------------------------------------------------->

function doingMathsOperations(a,b) {

    let sum = a + b;
    let multiple = a * b;
    let division = a - b;

    console.log(sum);
    console.log(multiple);
    console.log(division)

}

doingMathsOperations(10, 4)


// <-------------------------------------------------------------------------------------->


function doingMathsOperations(a, b) {
    let sum = a + b;
    let multiple = a * b;
    let division = a - b;

    let obj = {
        sum, multiple, division
    }
    return obj
}
let values = doingMathsOperations(10, 4)
console.log(values)

// <----------------------------------------------------------------------------------------------------->

// write a function which is accept a age as a argument and check that person is eligible for vote or not

typeof "John"         // Returns string
typeof ("John" + "Doe") // Returns string
typeof 3.14           // Returns number
typeof 33             // Returns number
typeof (33 + 66)      // Returns number
typeof true           // Returns boolean
typeof false          // Returns boolean
typeof 1234n          // Returns bigint
typeof Symbol()       // Returns symbol
typeof x              // Returns undefined

function eligibileToVote(age) {
    if (typeof (age) !== "number") {
        console.log("invalid input")
    }
    else if (age < 0) {
        console.log("invalid input")
    }
    else if(age>=18 && age < 120) {
        console.log("eligible for Vote")
    }
    else {
        console.log("not eligible for vote")
    }
}

eligibileToVote(9)