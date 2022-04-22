//1-) Given an array of integers, find the sum of its elements.

function sum (numbers){
    
    let result = 0;
    for(let i = 0; i < numbers.length; i++){
        result = result + numbers[i]
    }
    
return result;
}

let array = [2,4,6];

console.log(sum(array))
