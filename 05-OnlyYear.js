/*5-) A function that receives a date, but returns only the year. 
Input: 2021/12/21
Output: 2021 */

function showOnlyYear(date){
    let year="";

    for(let i = 0; i<4; i++){
        year = year+date[i];
    }
    return year;
}

console.log(showOnlyYear("2021-12-21"));
