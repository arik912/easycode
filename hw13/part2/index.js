let button1 = document.querySelector('#btn-msg');
button1.addEventListener('click',()=>alert(button1.innerHTML));
button1.addEventListener('mouseover',()=> button1.style.background = 'red');
button1.addEventListener('mouseout',()=> button1.style.background = 'none');
document.addEventListener('click',(e)=>document.querySelector('#tag').innerHTML = `${e.target.tagName}`)
let addLi = new CustomEvent('click',{count:0});
let ul = document.querySelector('ul');
let count = ul.children.length + 1;
let button2 = document.querySelector('#btn-generate');
button2.addEventListener('click',()=>{
	let newLi = document.createElement('li');
	newLi.innerHTML = `Item ${count}`
	ul.appendChild(newLi);
	count++;
})

class Nodes {
	constructor(element,property,value = 0, eventName, callback = 0){
		this.element = element;
		this.value = value;
		this.property = property;
		this.callback = callback;
		this.eventName = eventName;
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
	event(){
		if(callback == 0){
			return this.element.dispatchEvent(this.eventName);
		}else {
			 this.element.addEventListener(this.eventName,this.callback)
		}
	}

}
let modul = new Nodes(button1, 'color', 'black','click');
console.log(modul);