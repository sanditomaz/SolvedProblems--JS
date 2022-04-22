/** Implement a function that receives a string and returns another string but the characters in the "middle" of the string must go to the beginning and to the end, for example:
entry: "cabelo"
output: "bcaloe"

if the length of the string is odd, put the element at the beginning and at the end:
entry: "preto"
output: "eprtoe" **/

function middleToTheEndAndBeginning(str){

    let word = "";
    let word2 = "";
    let imparword = "";
    let imparword2 = "";

    if(str.length%2 == 0){
        for(let i = 0; i < str.length/2 -1; i++){
            word = word + str[i];
        }
    
        for(let i = str.length/2+1; i < str.length; i++){
            word2 = word2 + str[i];
        }

        let varZero = word; 
        let var1 = str[str.length/2 - 1] 
        let var4 = word2 
        let var5 = str[str.length/2] 

    return var1 + varZero + var4 + var5;
    }
    else{
        let impar = str[Math.trunc(str.length/2)];

            for(let i = 0; i<Math.trunc(str.length/2); i++){ 
                imparword = imparword + str[i];
                }

            for(let i = Math.trunc(str.length/2 +1); i < str.length; i++){
                imparword2 = imparword2 + str[i];
            }  
     return impar + imparword + imparword2 + impar;  
    }
}

let input = "preto";
console.log(middleToTheEndAndBeginning(input));