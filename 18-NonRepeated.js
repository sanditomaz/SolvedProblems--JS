/* 18-) Implement a Function that receives an array and returns an array without any repeated values. */



function checkIfIsInList(element, list){

    for(let i = 0; i<list.length; i++){
        if(element == list[i]){
            return true;
        }
    }
    return false;
}

function clean(list){
    let list2 = [];

    for(let i = 0; i < list.length; i++){
        if(!checkIfIsInList(list[i], list2)){
            list2.push(list[i]);
        }
    }
return list2;
}

let list = ["a","b","b","a","c","b"];

console.log(clean(list));