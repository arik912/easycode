let form = document.forms[0];
console.log(form);
let inputs = form.querySelectorAll('input');
let p = document.querySelector('p');
console.log(p);
console.log(inputs);
form.addEventListener('submit',(e) => {
	inputs.forEach( function(element, index) {
		if(element.value == ''){
			element.style.border = "2px solid red";
			e.preventDefault();
		}else if(element.name == 'age'){
			if(element.value < 18){
				p.innerHTML = 'to small for this content';
				e.preventDefault();
			}
		}else if(element.name == 'mail'){
			let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(!re.test(element.value)){
				p.innerHTML = 'email erorr';
				e.preventDefault();
			}

		}
	})
})
// на имя и фамилию тоже проверка через if и регулярка.
let arr = [ 
{'лето': 'одень футболку и шорты'}, 
{'осень': 'одень куртку и штаны'}, 
{'зима': 'одень шубу и теплые штаны'}, 
{'весна': 'одень ветровку и джинсы'} 
]

let select = document.querySelector('select');
let input = document.querySelector('.valuSelect');
console.log(input);


arr.forEach((element)=>{
	select.appendChild(new Option(Object.keys(element).join(''),element[Object.keys(element)]))
})
input.value = select.value;
select.addEventListener('change',(e) => {
	return input.value = select.value;
});

let block = document.querySelector('.block');
let reset = () => block.style.marginLeft = 0;
reset();
console.log(block);
let pixel = document.querySelector('.pixel');
console.log(pixel.value);
let run = document.querySelector('.run');

run.addEventListener('click',(e) => {
	// clearInterval(timer);
	reset();
	setInterval(() => {
		if(parseInt(block.style.marginLeft) < pixel.value){
			block.style.marginLeft = parseInt(block.style.marginLeft) + 1 + 'px';
		}
	}, 20)
});
let liters = document.querySelector('.liters');
let green = document.querySelector('.liters__greener');
let red = document.querySelector('.liters__red');
console.log(liters.children[0]);
class Liters {
	constructor(liters = 10,time){
		this.liters = liters;
		this.time = time;
		this.b = this.time;
		this.timer;
		this.a = 0;
		this.c = 1;
	}
	play(){
		this.timer = setInterval(() => {
			this.b--;
			liters.children[this.a].style.backgroundColor = 'grey';
			if(this.b == -1){
				if(this.a == 0){
					this.a = 1;
					this.c = 0;
					this.b = this.time;
					liters.children[this.a].style.backgroundColor = 'grey';
					liters.children[this.c].style.backgroundColor = '';
					liters.children[this.c].querySelector('p').innerHTML = '';
				}else{
					this.a = 0;
					this.c = 1;
					this.b = this.time;
					liters.children[this.a].style.backgroundColor = 'grey';
					liters.children[this.c].style.backgroundColor = '';
					liters.children[this.c].querySelector('p').innerHTML = '';
				}
			}
			liters.children[this.a].querySelector('p').innerHTML = `<span>${this.b}<span>`;


		}, 1000)
	}
	stop(){
		clearInterval(this.timer);
	}
	reset(){
		clearInterval(this.timer);
		liters.children[this.c].style.backgroundColor = '';
		liters.children[this.c].querySelector('p').innerHTML = '';
		liters.children[this.a].style.backgroundColor = '';
		liters.children[this.a].querySelector('p').innerHTML = '';
	}
}
let liters1 = new Liters(liters,3);
liters1.play();

