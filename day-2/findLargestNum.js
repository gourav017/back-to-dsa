//write a function that return largest num in the array
// -Infinity = smallest number of the world
// Infinity = Largest number of the world

function checkLargestNum(arr) {
    let largest =  - Infinity ;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;

}

let arr = [-2, 4, 6, 9, 1, 48765432345678, 7999]

console.log(checkLargestNum(arr))


////////////////////////
//write a function that return largest num in the array

function checkLargestNum(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

let arr = [-2, 4, 6, 9, 1, 9, 345678]

console.log(checkLargestNum(arr))