function Dog(){
	this.name = name ;
	this.somach = [];
}
Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
}
Dog.prototype.sayHi = function(first_argument){
	console.log(" I am Dog . Hello " + first_argument);
}
module.export = Dog;