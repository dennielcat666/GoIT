var animal = {
    name: 'Jack',
    color: 'white',
    age: 12
}

var str = JSON.stringify(animal);

console.log(str);


var obj = JSON.parse(str);

console.log(obj);


var my_obj = JSON.parse('{"test": "content"}');
console.log(my_obj.test);