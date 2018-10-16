function another(){
	return function(){
		return console.log(123);
	}
}
another()()