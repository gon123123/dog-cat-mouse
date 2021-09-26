var Dog = require('Dog') ;
var cat = require('cat');
var Mouse = require('mouse');

var cat = new Cat();
var mouse = new mouse();
var dog = new Dog();
cat.eat(mouse);
try{
	cat.eat(mouse);
}catch(error)
	console.log('cat eat only mouse !!!');
}