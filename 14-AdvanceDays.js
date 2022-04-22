
/* 16-) Advance Days-> Implement a function that will return which day of the week it will be from a given day as a string 
and of an amount of days to be advanced. For that, the function must receive a string and a number as parameters and return
a string. Note: days must be returned in the following format:

"Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"

If you pass “Monday” and 5: the function should return “Saturday”, because advancing 5 days from Monday it'll be Saturday.
If "Monday" and 8 are passed, the function should return "Tuesday", because if it advances 8 days from
Monday, it'll be Tuesday of the following week.*/

function find_day(day, quantity){
    let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday", "Sunday"];
    let numOfDay;
    for(let i = 0; i<7; i++){
        if(daysOfTheWeek[i]==day){
            numOfDay = i;
            break;
        }
    }
    return daysOfTheWeek[(quantity + numOfDay)%7];
}

let day = "Saturday";
let quantity = 10;

console.log(find_day(day,quantity));