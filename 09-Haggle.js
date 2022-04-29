/* 10-) A function that returns "I want to haggle" if the price is greater than 100 and there is no discount. And "deal", 
otherwise. */

function IWantToHaggle(price, hasDiscount) {
    let pricee = price >100;
    //console.log(price)
    if(pricee && !hasDiscount){
      return "I want to haggle!";
    }
    else{
      return "Deal!";
    }
  }

let hasDiscount = false;
let price = 200;

console.log(IWantToHaggle(price,hasDiscount));

