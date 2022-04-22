/* 23-) Implement a function that takes a string as a parameter and returns an array containing the letters repeated in the passed string.

If more than one letter is repeated in the string, sort the return array in the order the letters appear in the string
original

Example: if “ovo” is passed, the function must return “[o]”

Example: if “passagem” is passed, the function must return “[s,a]”  */

function checkIfIsInList(word, array){
    for(let i =0; i<array.length; i++){
        if(word == array[i]){
            return true;
        }
    }
    return false;
}

function repeatedLetters(string) {
    let array = [];
    let store;
    
    for(let i = 0; i<string.length; i++){
      if(string[i] == string[i+1]){
        store = string[i]
        array.push(store)
      }
    }
    for(let i=0; i< string.length; i++){
        for(let j=i+1; j< string.length; j++){
            if(string[i] == string[j]){
                store = string[j]
                if(!checkIfIsInList(store, array)){
                    array.push(store);
                }
                
            }
        }
    }
      return array;      
    }
    
    let string = "passagem";
    
    console.log(repeatedLetters(string));