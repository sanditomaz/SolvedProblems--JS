/* 18-) Implement a function that receives a list and another object (string, integer, list, etc) and returns how many times the object appears on the list.
Ex:
Input:
["DUCK" ,"fair", "FAIR", "DOG", "DOG", "fair"]

"fair"

Output: 2 
*/

function howManyTimes(array,str){
    let sum = 0;
    
        for(let i = 0; i<array.length; i++){
            if(str == array[i]){
                sum++
            }
        }
    return sum;
    }
    
    let list = ["DUCK" ,"fair", "FAIR", "DOG", "DOG", "fair"];
    let output = "fair";
    
    console.log(howManyTimes(list, output));
