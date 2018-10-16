//1
function Furniture(name, price){
	this.name = name;
	this.price = price;
}

Furniture.prototype.getInfo = function(){
	return this;
}
function Offise(name, price, hasShreder){
	this.hasShreder = hasShreder;
	Furniture.call(this,name,price);
}
Offise.prototype = Object.create(Furniture.prototype);
Offise.prototype.constructor = Offise;

const offiseFurniture = new Offise('petr',25,true);

console.log(offiseFurniture.getInfo())

function Home(name, price, hasTable){
	this.hasTable = hasTable;
	Furniture.call(this,name,price);
}
Home.prototype = Object.create(Furniture.prototype);
Home.prototype.constructor = Home;

const homeFurniture = new Home('taras',25,true);
console.log(homeFurniture.getInfo())

//2
function User(name, date){
	this.name = name;
	this.date = date;
}
User.prototype.getInfo = function(){
	return this;
}

function Admin(name, date, root){
	this._root = root;
	User.call(this, name, date);
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

function Guest(name, date, validDate){
	this._validDate = validDate;
	User.call(this, name, date);
}
Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

const admin = new Admin('petro','22.04', true);
const guest = new Guest('valera', '21.03',17);
console.log(admin.getInfo());
console.log(guest.getInfo());


//1
function General(test, parent) {
	this.test = test;
	this.parent = parent;
	this.getInfo = function () {
		return {test: this.test, parent: this.parent};
	}
}

function Child(test, parent, child){
	this.test = test;
	this.parent = parent;
	this.child = child;
	General.call(this,test,parent);
	const origin = this.getInfo;
	this.getInfo = function(){
		let a = origin.apply(this);
		a.child = this.child;
		return a
	}
}


let child = new Child(true,false,true);
console.log(child.getInfo())
//2
class Boy {
	constructor(name, quality){
		this.name = name;
		this.quality = quality || true;
	}
	getName(){
		return `Мальчика зовут ${this.name} .Он ${this.quality === true ? 'хороший' : 'Плохой'}`
	}
}

class BadBoy extends Boy{
	constructor(name){
		super(name);
		this.quality = false;
	}
	getName(){
		const str = super.getName();
		return console.log(`${str}.\n Не дружите с ним`);
	}
}

const badBoy = new BadBoy('valera');
badBoy.getName();

class Fruit{
	constructor(name, color){
		this.name = name;
		this.color = color;
	}
	getInfo(){
		return {'фрукт': this.name, 'цвет': this.color};
	}
}

class SweetFruit extends Fruit{
	constructor(name, color, sweetness){	
		super(name, color);
		this.sweetness = true;
	}
	getInfo(){
		const str = super.getInfo();
		return `${str} 'sweetness':${this.sweetness}`;
	}
	setSweetness(sweetness){
		this.sweetness = sweetness;
	}
}

let orang = new SweetFruit('апельсин', 'зелений');
console.log(orang);
orang.setSweetness(false);
console.log(orang)

function User(name, age) {
	this.name = name || 'Unknown';
	this.age = age || 0;
}

User.prototype.setNewName = function (name) {
	this.name = name;
};
function NewUser(name,age){
	User.call(this, name, age);
}


NewUser.prototype.setNewName = function(name){
	User.prototype.setNewName.call(this,name);
	this.changed = `The field ‘name’ was changed!`;
}

const vasya = new NewUser('www',25);
vasya.setNewName('taras');
console.log(vasya);


//2
function Module(name) {
  if (typeof name !== 'string') {
    throw 'Enter a name!';
  }
  
  this.getName = function () {
    return name;
  };
}

Module.prototype.getPrettyName = function () {
  let name = this.getName();  
  name = name.replace(/\s+/, '_');  
  return 'The module name is ' + name[0].toUpperCase() + name.substr(1);
};

Module.prototype.setGlobalName = function (prefix) {
  let name = this.getName();
  this.name = prefix ? prefix + '_' + name : name; };

function NewModule(name){
	Module.call(this,name);
}
NewModule.prototype = Object.create(Module.prototype);
NewModule.prototype.constructor = NewModule;
NewModule.prototype.setGlobalName = function(prefix){
	Module.prototype.setGlobalName.call(this,prefix);
	this.length = this.name.length;
}
const georg = new NewModule('george');
console.log(georg.setGlobalName(343));
console.log(georg.getPrettyName());
console.log(georg.getName());

