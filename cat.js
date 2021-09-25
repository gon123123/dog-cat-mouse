function cat(){
	this.stomach = [];
	console.log("hi caho chuot");
}
cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
}
module.export = Cat;