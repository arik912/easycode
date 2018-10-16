let ul = document.querySelector('ul');
console.log(ul.clientHeight + ' - с учетом');
console.log(parseInt(getComputedStyle(ul).height) + ' - без');
///2
let mark = document.querySelector('mark');
console.log(mark.offsetLeft, mark.offsetTop);

//3
console.log(mark.offsetWidth + mark.offsetLeft, mark.offsetHeight + mark.offsetTop);
console.log(mark.getBoundingClientRect());
let firstLi = ul.firstElementChild;
let secondLi = ul.firstElementChild.nextElementSibling;
console.log(firstLi.offsetWidth + firstLi.offsetLeft - secondLi.offsetLeft);

class Nodes {
	constructor(element,property,value = 0){
		this.element = element;
		this.value = value;
		this.property = property;
	}
	innerHeight(){
		return parseInt(getComputedStyle(this.element).height);
	}
	nnerWidth(){
		return parseInt(getComputedStyle(this.element).width);
	}
	height(){
		return this.element.clientHeight;
	}
	width(){
		return this.element.clientWidth;
	}
	outerHeight(){
		return this.element.offsetHeight;
	}
	outerWidth(){
		return this.element.offsetWidth;
	}
	style(){
		if(this.value !== 0){
			return this.element.style.property = this.value;
		}
		return this.element.style.this.property
	}
	getPosition(){
		return {
			top: this.element.offsetTop,
			left: this.element.offsetLeft
		}
	}
	backToTop(){
		scrollTo(0,0);
	}

}
let modul = new Nodes(mark, 'color', 'black');
console.log(modul);