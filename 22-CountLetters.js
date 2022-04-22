/* Implement a function that receives as parameters a string and a letter, it must return the number of occurrences of the letter passed in the string.

Example: if “career” and the letter “r” are passed, the function should return 2

Example: if “egg” and the letter “g” are passed, the function must return 2  */

function countLetters(string, letter) {
    cont = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] == letter){
            cont = cont+1;
        }
    }
    return cont;
}

let string = "egg"
let letter = "g"

console.log(countLetters(string,letter));