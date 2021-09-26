function Horse(){
}
Horse.prototype.jump = function (argument) {
	console.log("jump .....");
}
Horse.prototype.run = function(){
	console.log('Running');
};
module.export = Horse;