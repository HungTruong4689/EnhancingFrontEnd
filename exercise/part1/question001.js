// What are the possible ways to create objects in JavaScript

//Object literal syntax
var objects = {
    name: "john",
    age:20
}

// Object constructor
var object_contructer1 = new Object() // not recommended
var object_contructer2 = Object()

//Object create method
var object_create = Object.create(null) // write {} - second param is optional

let vehicle = {
  wheels: '4',
  fuelType: 'Gasoline',
  color: 'Green'
}
let carProps = {
  type: {
    value: 'Volkswagen'
  },
  model: {
    value: 'Golf'
  }
}

var car = Object.create(vehicle,carProps) // combine two objects to create a new object
console.log(car) // { wheels:'4',..., type: 'Volkswagen', model: 'Golf' }

//function constructor
function Person(name,age){
    this.name = name;
    this.age = age;
}
var person = new Person("john",20)

// function constructor with prototype
function Person2(name,age){
    
}
Person2.prototype.name = "john";
var person2 = new Person2()

//Object assign method
var obj1 = {name:"john"}
var obj2 = {age:20}
var obj3 = Object.assign({},obj1,obj2) // {name:"john",age:20}

//ES6 class
class Person3{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}
const person3 = new Person3("john",20)

//singleton pattern
var object_singleton = new (function(){
    this.name = "john";
})();
