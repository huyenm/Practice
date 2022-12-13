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


function topicValidate(item) {
  if (item.topic === "A" && 10 <= item.description.length <= 100) {
    return item.name === "a";
  } else if (item.topic === "B" && item.description.length <= 40) {
    return item.name === "b";
  }

  return true;
}

for (let i =0; i<= topicLists.length; i++){
        topicValidate(topicLists[i]);
}




