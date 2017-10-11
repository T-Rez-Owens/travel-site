var $ = require('jquery');
var Person = require('./modules/Person');

alert("this is a test 1234");

var john = new Person("John Doe", "Green");
john.greet();
var jane = new Person("Jane Doe", "Green-blue");
jane.greet();

$('h1').remove();