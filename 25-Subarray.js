/*SubArray

Implement function that takes two arrays as a parameter and must return true if the 2nd array equal to the 1st array and false otherwise.

Example: if the arrays “[1,4,3,5]” and “[1,2,4]” are passed, the function must return false, because the number “2” is not
present in the 1st array. */

function subArray(array, subarray) {
    let numero = 0;
    let isReal = false;
 
 
     while (numero < array.length){
         if(array[numero] == subarray[numero]){
             isReal = true;
             numero = numero + 1;
         }
         else{
             return false;
         }
     }
 return isReal;
 }
 
 let array = [1,2,3,4,5];
 let subarray = [1,2,3,4,5];
 
 console.log(subArray(array,subarray));