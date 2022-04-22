/* Change vowels
Implement a function that receives a string as a parameter and returns the original string, but with the number 1 replacing vowels.
Example: if the word “uva” is passed, the function should return “1v1”

Example: if the word “carro” is passed, the function should return “c1rr1” */

function replaceVowel(string){
    let stringResult = ""
    let vowels = ["a","e","i","o","u"];
    let isvowel = false

    for (let i=0;i<string.length;i++){
        for( let j =0; j<vowels.length; j++){
            if (string[i]==vowels[j]){
                isvowel = true;
            }
        }
        if (isvowel){
            stringResult = stringResult + "1";
        }else{
            stringResult = stringResult + string[i];
        }
        isvowel = false;
        
    }
    return stringResult;

}


let text = "carro";

console.log(replaceVowel(text));