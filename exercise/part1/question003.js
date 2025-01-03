// What is the difference between call, apply and bind?
// call
const obj1 = {firstname: 'John',lastname: 'Doe'};
const obj2 = {firstname: 'Jane',lastname: 'Doe'};
function greeting(greeting1, greeting2) {
    console.log(`${greeting1} ${this.firstname} ${this.lastname} ${greeting2}`);
}
greeting.call(obj1, 'Hello', 'How are you?');
greeting.call(obj2, 'Hi', 'Nice to meet you!');
// apply - allows you to pass an array as the arguments
greeting.apply(obj1, ['Hello', 'How are you?']);
greeting.apply(obj2, ['Hi', 'Nice to meet you!']);
// bind - returns a new function, allowing you to pass an array as the arguments
var greeting1 = greeting.bind(obj1);
var greeting2 = greeting.bind(obj2);
greeting1('Hello', 'How are you?');
greeting2('Hi', 'Nice to meet you!');
//or
greeting1(['Hello', 'How are you?']);
greeting2(['Hi', 'Nice to meet you!']);
