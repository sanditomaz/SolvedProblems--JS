
/*4-) A function that receives a list of integers and an integer, it has to return the position of the integer that was 
passed, in the list. But if the integer is not in the list, the number is NULL.
Input: function getIndex([5,3,9,4], 3);
Output: 1; */

function position(list, number){

    for(let i=0; i<list.length;i++){
        if (number == list[i]){
            return i;
        }
    }
    return null;
}
let list= [1,4,5,6];
let number = 6;
console.log(position(list,number));
