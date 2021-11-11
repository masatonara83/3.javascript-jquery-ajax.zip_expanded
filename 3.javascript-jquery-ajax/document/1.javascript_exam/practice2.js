console.log("演習8")
{
	function printName(){
		console.log('奈良将人');
	}
	printName();
}

console.log("演習8-2")
{
	function add(a,b){
		return a + b;
	}
	function sub(a,b){
		return a - b;
	}
	function multi(a,b){
		return a * b;
	}
	function div(a,b){
		return a / b;
	}
	console.log(add(5,3));
	console.log(sub(5,3));
	console.log(multi(5,3));
	console.log(div(5,3));
}

console.log("演習9")
{
	let printNameVariable = {
		name: function(){console.log('nara');}
	}
	printNameVariable.name();
}

console.log("演習9-2")
{
	let addVariable = function(a,b){
		return a + b;
	}
	let subVariable = function(a,b){
		return a - b;
	}
	let multiVariable = function(a,b){
		return a * b;
	}
	let divVariable = function(a,b){
		return a / b;
	}
	
	console.log(addVariable(5,3));
	console.log(subVariable(5,3));
	console.log(multiVariable(5,3));
	console.log(divVariable(5,3));
}

console.log("演習10")
{
	var globalVal = 10;
	function func1(){
		var localVal = 20;
		console.log('globalVal: ' + globalVal);
		console.log('localVal: ' + localVal);
	}
	
	func1();
	console.log('globalVal: ' + globalVal);
	//console.log('localVal' + localVal);
}

console.log("演習11")
{
	func1();
	function func1(){
		 x = 6;
		if(true){
			let x = 5;
			
		}
		console.log(x);
	}
	func1();
}
