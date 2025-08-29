// Write a function secondLargest(arr) that returns the second largest distinct number in an array.
function secoundLargestNum(arr) {

    if (arr.length < 2) {
        return "array should be atleast 2 numbers"
    }

    let firstLargest = -Infinity;
    let secoundLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secoundLargest = firstLargest;
            firstLargest = arr[i]
        }
        else if (arr[i] > secoundLargest && firstLargest !== arr[i]) {
            secoundLargest = arr[i]
        }
    }
    return secoundLargest;
}

let arr = [4, 9, 9, 0, 2, 8, 7,7,7, 1]

console.log(secoundLargestNum(arr))