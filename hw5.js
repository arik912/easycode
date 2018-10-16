const rectangle = {
	width: 10,
	height: 12,
	getSquare
}
function getSquare(){
	return (this.width * this.height)/2;
}
console.log(rectangle.getSquare());

const price = {
	price: 10,
	discount: '15%',
	getPrice,
	getPriceWhithDiscount
};

function getPrice(){
	return this.price
};
function getPriceWhithDiscount(){
	return this.price - parseInt(this.discount) * 0.1;
}
console.log(price.getPriceWhithDiscount());


const user = {
	name: 'Abraham'
};
getUserName = function(){
	return this.name
};
user.getName = getUserName;
console.log(user.getName());

const obj = {
	heigth: 10,
	inc: function(){
		return this.heigth++;
	}
}
console.log(obj.heigth)
obj.inc();
console.log(obj.inc())


const numerator = {
	value: 1,
	double: function(){
		 this.value *= 2;
		return this;
	},
	plusOne: function(){
		this.value += 1;
		return this;
	},
	minusOne: function(){
		this.value -= 1;
		return this;
	}
}
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value)

//6 
const user2 = {
	name: 'Abraham'
},
otherUser = {
	name:'john',
	getName: function(){
		return this.name;
	}
}
console.log(user2.getName) // потому что у user2 нет метода getName
user2.getName = otherUser.getName; // тут м1 взяли от того где он б1л и присвояли user2 недостающий метод
console.log(user2.getName()) 

//// this 

//getList() - ссылаеться на глобальный обэкт
//users.getList() выведет list так как вызвана как метод обкэкта
//getList.call(users) - выведет lists так как мы передали контекст

const item = {
	price: 10,
	amount: 5,
	current: function(){
		return this.price * this.amount;
	}
}
console.log(item.current());
const details = {
	amount:7,
	price:5
}

console.log(item.current.call(details));

let sizes = {
	width: 5,
	height: 10
}

getSquare = function(){
	return this.width * this.height;
}
console.log(getSquare.call(sizes));

let numbers = [4,12,0,10,-2,4];

console.log(Math.min.apply(null, numbers));


const element = {
	height: '15px',
	marginTop: '5px',
	marginBottom: '5px',
	getFullHeight: function(){
		return parseInt(this.height) + parseInt(this.marginBottom) + parseInt(this.marginTop);
	}
};
console.log(element.getFullHeight())
const block = {
	height:'5px',
	marginTop: '3px',
	marginBottom: '3px'
}
console.log(element.getFullHeight.call(block));

let element2 = {
	height:25,
	getHeight: function(){
		return this.height;
	}
}
let getElementHeight = element2.getHeight.bind(element2);
console.log(getElementHeight())

