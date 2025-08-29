// Write a function thirdLargest(arr) that returns the second largest distinct number in an array.

function thirdLargestNum(arr) {

    if (arr.length < 3) {
    return "array should have atleast 3 numbers"
}

    let firstLargest = -Infinity;
    let secoundLargest = -Infinity;
    let thirdLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > firstLargest) {
            secoundLargest = firstLargest;
            thirdLargest = secoundLargest;
            firstLargest = arr[i]
        }
        else if (arr[i] > secoundLargest) {
            thirdLargest = secoundLargest;
            secoundLargest = arr[i]
        }
        else if (arr[i] > thirdLargest) {
            thirdLargest = arr[i]
        }
    }
    return thirdLargest;
}


let arr = [4, 9, 0, 2, 8, 7, 1]

console.log(thirdLargestNum(arr))