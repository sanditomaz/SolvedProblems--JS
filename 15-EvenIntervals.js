/* 15-) Implement a function that takes 3 numbers as parameters. The first two delimit an interval. The function must return an array containing the smallest even numbers within the range. The amount of elements in this array must be equal to the 3rd parameter passed. Note: The 1st parameter will always be smaller than the 2nd parameter.
The function should return the smallest possible even numbers within the range.
Example: if the values ​​“2”, “10”, “3” are passed, the function must return the array [4,6,8]
Example: if the values ​​“2”, “10”, “2” are passed, the function must return the array [4,6] */

function evenIntervals(start, end, quant) {
    let even = [];
    let result = [];
    count=0

    for(let i= start; i < end+1; i++){
        if(i%2 == 0 && i!=start){
          even.push(i);
          count++
        }
        if (count == quant){
            break
        }
    }
   return even;
  }
  
  let num1= 2;
  let num2= 10;
  let quanty = 3;
  
  console.log(evenIntervals(num1,num2,quanty));