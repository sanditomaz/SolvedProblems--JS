/*  exercicios:
faça uma função q recebe 2 strings e verifique se a segunda está dentro da primeira:
ex:
input:
"arara"
"ara"

output:
True
============
input
"abacate"
"acato"

output:
false */

function isInside(str1, str2){
    let first = 0;
    let isIn = "";
    let count = 0;

for(let i = 0; i < str1.length; i++){
    for(let j = 0; j <str2.length; j++){
        if(str2[j] === str1[j+i]){
            count++
        }
        else{
            break;
        }
    }
    if(count == str2.length){
        return true;
    }
    count  = 0;
}
return false;
}
    
let str1 = "ararba";    
let str2 = "arb";

console.log(isInside(str1,str2));