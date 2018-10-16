

// console.log(getBigName(userName));
// function getBigName(name){
// 	name = name +'';
// 	return name.toUpperCase();
// }
// var userName = 'Ivan';
// UNDEFINED - переменная на момент вызова ф-ции создана но значение не присвоено

function test(){
	var name = 'Vasiliy';
	return getBigName(userName);
}
function getBigName(name){
	name = name + '';
	return name.toUpperCase();
}
var userName = 'ivan';
console.log(test());
//IVAN - test => getBigName(ivan) - функция будет работать с userName - так как мы его явно передали

var food = 'cucumber';
(function(){
	var food = 'bread';
	getFood();
})();

function getFood(){
	console.log(food);
}
// cucumber - так как ф-ция getFood - глобальном LE то и переменная от туда

var dollar, getDollar;
(function(){
	var dollar = 0;
	getDollar = function(){
		return dollar;
	}
})();
dollar = 30;
console.log(getDollar());
// ф-ция берет переменную из замыкания
var greet = 'Hello';
(function(){
	var text = 'World';
	console.log(greet + text);
}());
//console.log(greet + text); при вызове в не замыкания будет ошыбка так как нам не доступна переменная text из вне

function minus(first){
	return function(second){
		return first - second;
	}
}
console.log(minus(0)(0));
let MultiplyMaker = (n) =>{
	let cache = n;
	return (n) => {
		return cache = cache * n;
	}
}

const multiply = MultiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));

const modul = (function(){
	let memory;
	function setStr(str){
		if(typeof str == 'number'){
			memory = String(str);
		}
		else if(str == undefined){
			memory = '';
		}
		else memory = str;
	}
	function getStr(){
		return console.log(memory);
	}
	function getLength(){
		return console.log(memory.length);
	}
	function getReverse(){
		return console.log(memory.split('').reverse().join(''));
	}
	return{
		setStr,
		getStr,
		getLength,
		getReverse
	}
}());
modul.setStr('asfsdf');
modul.getStr(); 
modul.getLength();
modul.getReverse();

const calc = (function(){
	let memory;
	function setMemory(num){
		memory = num;
		return this;
	}
	function plus(num){
		memory += num;
		return this;
	}
	function minus(num) {
		memory -= num;
		return this;
	}
	function multiply(num){
		memory *= num;
		return this;
	}
	function divided(num){
		memory /= num;
		return this;
	}
	function pow(num){
		memory = Math.pow(memory, num);
		return this;
	}
	function getMemory(){
		console.log(memory.toFixed(2));
	}
	return {
		setMemory,
		plus,
		minus,
		multiply,
		divided,
		pow,
		getMemory
	}
}());
calc.setMemory(10);
calc.plus(5);
calc.multiply(2);
calc.getMemory();

calc.setMemory(10).pow(2).getMemory();
