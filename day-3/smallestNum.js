// Write a function that returns the smallest number in an array.

function checksmallestNum(arr) {
    let smallest = Infinity;  //arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest
}

let arr = [-2, -67, -9000, -12, -1]

console.log(checksmallestNum(arr))