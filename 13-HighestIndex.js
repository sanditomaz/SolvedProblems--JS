/* 13-) Implement a function that returns the index of the highest number in a list. */

function highestIndex(list) {
    let highestNumberTillNow = list[0];
    let result;

    for(let i = 1; i<list.length;i++){
        if(list[i] > highestNumberTillNow){
            highestNumberTillNow = list[i];
        }
    }

    for (let y = 0; y<list.length; y++){

        if(highestNumberTillNow == list[y]){
            result = y; 
        }
    }
    return result; 
}

let list = [10,50,30,80,20,90];
console.log(highestIndex(list));