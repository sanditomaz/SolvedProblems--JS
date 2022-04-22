//3-) A function that returns the factorial of a number

function factorial(number){
    let result = 1;
    
    for(;number != 1; number--){
        result = result * number
    }
    return result;
}

console.log(factorial(5))
//OR
function factor(number){
    let result = 1;

    while(number != 1){
        result = result * number
        number--;
    }
    return result;
}

console.log(factor(5));
