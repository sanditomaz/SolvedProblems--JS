//2-) Given an array of integers, sum even Numbers.

function sumEven (numbers) {
    
    let result = 0;

    for(let i=0; i <numbers.length; i++){
        if (numbers[i] % 2 == 0){
            result = result +numbers[i]
        }
    }
    return result; 
}

let array = [1,2,3,4,5,6,7,8];

console.log(sumEven(array));