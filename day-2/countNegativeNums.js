
function countNegativeNums(arr) {
    let negativeCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCount++
        }
    }
    return negativeCount;
}

let arr = [-1, 4, -6, -5, 7, 2, -5];

let counts = countNegativeNums(arr)

console.log(counts)
