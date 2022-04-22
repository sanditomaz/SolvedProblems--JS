/* Sum up to goal
Implement a function that takes 2 numbers as parameters and returns an array containing the numbers consecutive to the
1st parameter up to the value where, when adding up all the numbers in the array, we have the value passed in the 2nd 
parameter.
Example: if the values ​​“2” and “12” are passed, the function must return the array [3,4,5], because 3+4+5=12 which is the 
passed goal in the 2nd parameter

Example: if the values ​​“12” and “58” are passed, the function must return the array [13,14,15,16], because 13+14+15+16=58 
which is the goal informed in the 2nd parameter */

function sumUpToGoal(start, goal) {
    let array = [];
    let sum = 0;

    while(sum < goal){
        start = start + 1;
        array.push(start); 
        sum = sum + start;
    }
    return array;
}

let start = 2;
let goal = 12;

console.log(sumUpToGoal(start,goal));
