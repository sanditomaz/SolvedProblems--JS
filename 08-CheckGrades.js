/*8-) A function that receives a grade and a number of absences, it will return "You Passed!" if the average is
greater than or equal to 7 and the number of absences less than 10, or "You Failed!" otherwise. */

function pass(grade, absences) {
    let grad =  grade >=7;
    let miss  = absences <10;
  
    if(grad && miss){
        return "You Passed!";
    }
    else{
        return "You Failed";
    }
  }

let grade = 8;
let absences = 8;
  
console.log(pass(grade, absences));