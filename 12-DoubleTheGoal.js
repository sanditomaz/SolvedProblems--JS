/* 12-) Implement a function that receives an array and returns the sum of all its numbers multiplied by 2. */

function double(list) {
    sum = 0;
  
    for(let i = 0; i<list.length;i++){
        sum = sum + list[i];
    }
     sum =  sum*2;
    return sum;
  }

  let list = [2,2,2];

  console.log(double(list));