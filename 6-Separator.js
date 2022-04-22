
//6-) Implemente a função split que recebe uma string e um separador
function split(string, separator){
    let result = [];
    result = string.split(separator);
    return result;
}

phrase = ("I, am, cool")
separator = (",")

console.log(split(phrase, separator)); 

//OR

function split1 (string, separator){
    let result = [];
    let word="";

    for(let i=0;i<string.length;i++){//for para percorrer a string
        if (string[i]== separator){ //if para encontrar o separador
            if (i!=0){//if para nao adicionar "" em result em caso da string começar com o separador
                result.push(word);//adiciona palavra em result caso encontre um separador
                word="" //renicia a palavra apos ela seja adicionada em result
            }
        }else{
            word=word+string[i]//concatena chars q n sao separadores para formar a palavra
        }   
    }

    if (separator!=string[string.length-1]){//if para nao adicionar "" em result em caso da string terminar com o separador
        result.push(word);//adiciona a ultima paralvra(depois da ultima aparicao do separador)
    }

    return result
}
phrase = ("I, am, cool")
separator = (",")

console.log(split1(phrase, separator)); 

//----------------------------------------------------------

function split(string, separator){
    result = [];
    word = "";

    for(let i=0; i<string.length;i++){
       
        if(string[i] != separator){
                word = word + string[i]
        }
        if(string[i] == separador && word != "" || i==string.length-1 ){
            result.push(word)
            word = "";
        }
    }
    
    return result;    
}

let phrase = "I, am, a, lady"
let separador = ","
console.log(split(phrase,separador));
