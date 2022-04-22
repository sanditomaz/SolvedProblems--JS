/* 11-) Using loops, implement a functin that receives a text and a number of repetitions. It should return a string with the 
text repeated n times, where n is the number of repetitions. */

function multiply(text, reps) {
    let result = "";
  
    for(let i = 0; i<reps; i++ ){
        result = result + text;
    }
    return result;
}

let text = "fruits ";
let reps = 3;

console.log(multiply(text, reps));
