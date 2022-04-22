/* 17-) function that receives a list and returns a list that says how many times each element of the list appears.
EX:
INPUT: ["a","b","b","a","c","b"]

OUTPUT:
[["a", 2], ["b", 3], ["c",1]] */

function checkIfIsInList(list, element){
    
    for(let i = 0; i<list.length;i++){
        if (element == list[i]){
            return true;
        }
    }
    return false;
}

function createUniqueArray(array){
    arrayUnique = [] 
    for(let i=0;i<array.length;i++){
        if(!checkIfIsInList(arrayUnique, array[i])){
            arrayUnique.push(array[i])
        }
        
    }
    return arrayUnique
}

console.log(createUniqueArray(["a","b","b","a","c","b",1,1,1,1,1]))

function howManyTimesElementShows(array){
    let result = [];
    let cont = 0;
    let uniqueArray = createUniqueArray(array)

    for(let j=0;j<uniqueArray.length;j++){
        for(let k=0;k<array.length;k++){
            if (uniqueArray[j] == array[k]){
                cont++
            }
        }
        result.push([uniqueArray[j],cont])
        cont = 0
    }
    return result
}   
   let list = ["a","b","b","a","c","b"];
   
   console.log(howManyTimesElementShows(list));