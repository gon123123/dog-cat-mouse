var Mouse = require('mouse');
function cat(){
	this.stomach = [];
	console.log("hi caho chuot");
}
Cat.prototype.eat = function(animal){
	if(animal instanceof Mouse){
		this.stomach.push(animal);
	} else{
		throw new Error('cat can only eat mouse !');
};
Cat.prototype.die = function(){
	this.isDead = true ;
};
module.export = Cat;