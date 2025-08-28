for (let i = 0; i < 10; i++) {
    console.log("Hello World")
}

// reverse loop
for (let i = 5; i > 0; i--) {
    console.log(i)
}

// <------------------using function------------------------->
function greet(i) {
    console.log("namaste! " + i)
}

for (let i = 0; i < 10; i++) {
    greet(i)
}

// <-----------------------using array----------------------->
let arr = [10, 2, 4, 6, 3, 7, 9];
for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {

        console.log(arr[i])
    }

}
// So: str = "gourav"

// str[0] = 'g' (first character)
// str[1] = 'o' (second character)
// str[2] = 'u' (third character)
// str[3] = 'r' (fourth character)
// str[4] = 'a' (fifth character)
// str[5] = 'v' (sixth character)

// <-----------------while loop---------------------------->
let i = 0;

while (i < 10) {
    console.log("namaste while loop " + i)
    i++
}

////
let arrr = [10, 3, 4, 7, 4, 9, 20]

let ii = 0;
while (ii < arr.length) {
    if (arr[ii] % 2 === 0) {
        console.log(arr[ii])
    }
    ii++
}

// <-------------------------------------------------------------------------------------------->
// search a number and return its index else -1
function searchElement(n) {
    let arr = [10, 2, 5, 7, 9]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i
        }
    }
    return -1

}
//while loop se
let thatindex = searchElement(7)  //return 3
console.log(thatindex)

let array = [1, 2, 3, 4, 7, 8, 8]

function searchElement(n) {
    let i = 0;
    while (i < array.length) {
        if (array[i] === n) {
            return i
        }
        i++;
    }
    return -1
}

console.log(searchElement(8))
