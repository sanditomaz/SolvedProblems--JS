// 10-) Using loops, implement a function that receives a text and returns a string with the text repeated 10 times.

function times10(text) {
    let counter = 0;
    result = "";
  
    while(counter <10){
      result = result + text;
      counter++;
    }
    return result;
  }

  let text = "strawberry ";

  console.log(times10(text));  
