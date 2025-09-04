// printing a "*" in the square format 4*4

for (let i = 0; i < 4; i++){
let row = ""
    for (let j = 0; j < 4; j++){
        row = row + "*";
    }
    console.log(row)
}


// <-------------------------------------------------------------------------------->
// printing a "*" in the one two three four  format 1*4



for (let i = 0; i < 4; i++){
let row = ""
    for (let j = 0; j < i+1; j++){
        row = row + "*";
    }
    console.log(row)
}