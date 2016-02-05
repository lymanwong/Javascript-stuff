/*
You are on a business trip and travelling from one city to another. You have a stack of unsorted flight boarding passes. Only departure city and destination city are on the boarding pass. How do you find the first departure city and your final destinatin city?
*/

function startAndStop(tickets){
  var collection = [];
  for(var i=0; i<tickets.length; i++){
    for(var j=0; j<tickets.length; j++){
      if(tickets[i][1] === tickets[j][0]){
        collection.push(tickets[i]);
        index1 = array.indexOf(tickets[i]);
        collection.push(tickets[j]);
      }
    }
  }
  return collection;
};

console.log(startAndStop([["SD","TX"],["NY","SF"],["LA","SD"],["TX","OR"],["SF","LA"],["OR","NY"]]))
//([[SF,LA],[LA,SD],[SD,TX],[TX,OR],[OR,NY], [NY,SF]])
