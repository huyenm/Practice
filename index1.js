var dict = [
    {'topic': 'A', 'name': 'a', 'descriptionLength': [10,100]},
    {'topic': 'B', 'name': 'b', 'descriptionLength': [0,40]}
]

var currentObj = {
    'topic': 'A',
    'name': 'a',
    'description': 'somethingggggg'
}

// validator check
function validator(obj){
    var correctName;
    var correctDesLengthArr;
    for (var i = 0; i < dict.length; i++){
        if (dict[i]['topic']== obj.topic){
            correctName = dict[i]['name'];
            correctDesLengthArr = dict[i]['descriptionLength'];
        }
    }

    // . toString used with a number & convert number to a string
    if (obj.name = correctName
        && obj.description.toString().length > correctDesLengthArr[0]
        && obj.description.toString().length < correctDesLengthArr[1]){
            return true
        } else {
            return false
        }
    }

var test = validator(currentObj);
console.log(test);