function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
let checkCoocie =function(){
if(getCookie('name')){
	document.querySelector('.name').innerHTML = `${getCookie('name')}`;
}else {
	let userName = prompt('Введите ваше иммя','userName');
	document.cookie = `name=${userName}`;
	document.querySelector('.name').innerHTML = `${getCookie('name')}`;
	console.log('netu');
	console.log(getCookie('name'));
}

}
checkCoocie();