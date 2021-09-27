function Horse(){
}
Horse.prototype.jump = function (argument) {
	console.log("jump .....");
}
Horse.prototype.run = function(){
	console.log('Running');
};
Horse.prototype.run2 = function(){
	console.log('Running2');
};
module.export = Horse;

