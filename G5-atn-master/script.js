
var numbers = [];
for (var i = 1; i <= 22; i++) {
    numbers.push(i);
}

var groups = [];
for (var i = 0; i < 7; i++) {
    var group = [];
    if (i === 0) {
        for (var j = 0; j < 4; j++) {
            var index = Math.floor(Math.random() * numbers.length);
            group.push(numbers[index]);
            numbers.splice(index, 1);
        }
    }

    else {
        for (var j = 0; j < 3; j++) {
            var index = Math.floor(Math.random() * numbers.length);
            group.push(numbers[index]);
            numbers.splice(index, 1);
        }
    }
    groups.push(group);
}

console.log(groups);
