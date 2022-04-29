/* 8-) A function that receives 2 arrays and return elements that are in the 2 arrays. 
Input: [1,"c", "tree", 2.25, "tree"]
       [t,"tree",2.25,"dog"]

Output: ["tree", 2.25] */

function checkIfIsInList(list, element){
    
       for(let i = 0; i<list.length;i++){
           if (element == list[i]){
               return true;
           }
       }
       return false;
   }
   
   function sameElementTwoLists(list1,list2){
       let result = [];
       let word;
   
       for(let i =0; i<list1.length;i++){
           for(let j=0; j<list2.length;j++){
               if(list1[i]==list2[j]){
                   word = list2[j];
                   if(!checkIfIsInList(result,word)){
                       result.push(word)
                   }
               }
           }
       } 
           return result;
      }
   
   let list1= [1,"c", "barbie", 1.64, "american",5.4, 1.64];
   let list2= ["t", 1.64, "barbie","canadian", 2.2, "american"];
   
   console.log(sameElementTwoLists(list1, list2));
   
