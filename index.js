const topicLists = [{
    "topic": "A",
    "name": "a",
    "description": []
},
{
    "topic": "B",
    "name": "b",
    "description": []
}]

let currentList = {
    "topic": "A",
    "name": "a",
    "description": "somethinggg" 
}


function validator(item) {
  if (item.topic === "A" && 10 <= item.description.length <= 100) {
    return item.name === "a";
  } else if (item.topic === "B" && item.description.length <= 40) {
    return item.name === "b";
  } else {
  return false
} 
}

for (let i =0; i < topicLists.length; i++){
        validator(topicLists[i]);
}

let testList = validator(currentList);
console.log(testList);


