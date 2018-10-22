document.cookie = `name=user1`;
document.cookie = `password=qwerty`;

let form = document.forms[0];
let login = form.elements[0];
let exp = new Date();
exp.setSeconds(exp.getSeconds() + 10)
let password = form.elements[1];
window.onload = function(){
	if(getCookie('online') == 'true'){
		form.style.display = 'none';
		document.querySelector('h1').style.display = 'block';
	}else{
		document.querySelector('h1').style.display = 'none';
	}
}
form.addEventListener('submit',(e) => {
  if((login.value == getCookie('name')) && (password.value = getCookie('password'))){
  	document.querySelector('.name').innerHTML = `${getCookie('name')}`;
  	form.style.display = 'none';
  	document.querySelector('h1').style.display = 'block';
  	document.cookie = `online=true; expires=`+exp.toUTCString();
  	e.preventDefault();

  }else{
  	e.preventDefault();
  	document.querySelectorAll('input').forEach( function(element, index) {
  		element.style.borderColor = 'red';
  		console.log(getCookie('name'),password = getCookie('password'))
  		console.log(login.value);
  	});
  }
});
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}