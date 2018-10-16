let ul = document.querySelector('ul');
let newLi = document.createElement('li');
console.log(newLi);
ul.insertAdjacentHTML('beforeend','<li class = new-item><a href="#">link5</a></li><li class = new-item><a href="#">link6</a></li>');
let strong = document.createElement('strong');
let strong2 = document.createElement('strong');
let strong3 = document.createElement('strong');
ul.firstElementChild.firstElementChild.insertAdjacentElement('beforeend',strong);
ul.firstElementChild.nextElementSibling.firstElementChild.insertAdjacentElement('beforeend',strong2);
ul.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.insertAdjacentElement('beforeend',strong3);
let img = document.createElement('img');
img.setAttribute('href','https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg');
img.setAttribute('alt','cat');
document.body.insertAdjacentElement('afterBegin',img);
let mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend',' green');
mark.classList.add('green');
let newUl = Array.from(ul.children).reverse().map((element)=> element.outerHTML).join('');
console.log(newUl);
ul.innerHTML = newUl;
console.log(ul);

// ст.5
console.log(mark.style.background);
console.log(getComputedStyle(mark).background);
mark.style.background = 'blue';
console.log(getComputedStyle(document.querySelector('a')).color);
console.log(getComputedStyle(document.querySelector('p')).fontSize);
console.log(getComputedStyle(document.querySelector('p')).fontFamily);
ul.querySelectorAll('a').forEach((item) => {
  item.style.color = 'red';
})
ul.nextElementSibling.nextElementSibling.style.display = 'none'; 