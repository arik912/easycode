function Car(name, age) {
	this.name = name;
	this.age = age;
	this.getName = function(){
		return this.name[0].toUpperCase() + this.name.slice(1);
	}
	this.getAge = () => {
		let a = new Date().getFullYear();
		let b = this.age;
		return a-b;
	}
}
let lexus = new Car('lexus',2);
console.log(lexus.getName());
console.log(lexus.getAge());

function Convertor(str){
	this.str = str;
	this.getStr = () => this.str;
	this.getConvertStr = () => {
		a = this.str.split('');
		return a.map((item) => item.charCodeAt(0)).join(''); 
	}
	this.dell = () => this.str = '';
	return {
		getStr: this.getStr,
		getConvertStr: this.getConvertStr,
		dell: this.dell
	}
}
let convert = new Convertor('Петро');
console.log(convert.getConvertStr())
convert.dell();
let convert2 = new Convertor('sdfsdf');
console.log(convert2.getStr());


class Some {
	constructor(text){
		this.str = text;
		this.valueOf = function(){
			return this.str.length;
		}

	}
	toString (){
		return this.str;
	}
	getStr(){
		return this.str;
	}
	setStr(text){
		return this.str = text;
	}
	getLength(){
		return this.str.length;
	}

}

let str = new Some('test');
console.log(str.getStr());
str.setStr('privet');
console.log(str.getStr());
console.log(str.getLength());
console.log(str.toString());
console.log(+str)


function Planet(name){
	this.name = name;
	this.getName = function(){
		return 'Planet name is ' + this.name;
	}
}

function PlanetWhithSatellite(name, satalliteName){
	this.satalliteName = satalliteName;
	Planet.call(this, name);
	const origin = this.getName;
	this.getName = function(){
		return origin.call(this) + '. The satellite is ' + this.satalliteName;
	}

}


let earth = new PlanetWhithSatellite('earth','moon');
console.log(earth.getName());

function Bilding(name, floors){
	this.name = name;
	this.floors = floors;
	this.getFloors = function(){
		return this.floors;
	}
	this.setFloors = function(floors){
		this.floors = floors;
	}
}

function Hous(name, floors, flatOnFloor){
	this.flatOnFloor = flatOnFloor;
	Bilding.call(this, name, floors);
	const origin = this.getFloors;
	this.getFloors = function(){
		return{
			name: this.name,
			floors: origin.apply(this),
			allFlat: origin.apply(this) * this.flatOnFloor
		}
	}
}

let hous = new Hous('dom',4,4);
hous.setFloors(4);
console.log(hous.getFloors());

function Supermarket(name, floors, shopOnFloors){
	this.shopOnFloors = shopOnFloors;
	Bilding.call(this, name, floors);
	const origin = this.getFloors;
	this.getFloors = function(){
		return{
			name: this.name,
			floors: origin.apply(this),
			allFlat: origin.apply(this) * this.shopOnFloors
		}
	}
}

let supermarket = new Supermarket('shop',5,5);
supermarket.setFloors(4);
console.log(supermarket.getFloors());







