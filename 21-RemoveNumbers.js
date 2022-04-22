
/* Implement a function that takes a string as a parameter, mixing letters and numbers, and should return a
string containing only the letters of the string passed in the same order.
Example: if the string “ab2c4d” is passed, the function should return “abcd”

Example: if the string “1234” is passed, the function must return “” */

function removeNumbers(string){
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    let isANumber = false;
    let result = "";
   
       for(let i = 0; i<string.length; i++){
           for(let y = 0; y < numbers.length; y++){
               if(string[i] == numbers[y] && string[i] != " "){
                   isANumber = true;
               }
           }
           if(!isANumber){
               result = result + string[i];
           }
           isANumber = false;
       }
    return result;
   }
   
   let text = "ab2c4d";
   
   console.log(removeNumbers(text));