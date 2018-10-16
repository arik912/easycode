let string = `some test string`;
let firstChar = string.charAt(0);
let lastChar = string.charAt(string.length - 1);
console.log(string[0].toUpperCase() + string.slice(1,string.length - 1) + string[string.length - 1].toUpperCase());
console.log(string.lastIndexOf(' '));
console.log(string.substr(5,4));
console.log(string.substring(5,9));
let newString =string.slice(0, string.length - 6);
console.log(newString);
let a = 20, b = 16;
stringDate = '' + a + b;
console.log(typeof(stringDate));

//2
let str = `I am in the easycode`, i = 0;
let strArr = str.split(' ');
while(i < strArr.length){
	strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substr(1);
	i++;
}
console.log(strArr.join(' '));
let strNew = `tseb eht ma i`;
let strNew2 = strNew.split(' ').reverse();
for (i = 0; i < strNew2.length; i++){
	strNew2[i] = strNew2[i].split('').reverse().join('');
}
console.log(strNew2.join(' '));

let factorial = (n) => {
	let resoult = 1;
	for (let i = 1; i <= n; i++){
		resoult = resoult * i;
	}
	return resoult;
} 
console.log(factorial(10));
i = 1;
while(i <= 10){
	console.log(i);
	i++;
}
str = `JavaScript is a pretty good language`
str2 = str.split(' ').map((item) => item[0].toUpperCase() + item.substr(1)).join('');
// let newStr = (someStr) => {
// 	let str2 = '';
// 	for (i = 0; i < someStr.length; i++){
// 		if(someStr[i] == ' '){
// 			str2 += someStr[i+1].toUpperCase(); не знаю как убрать повторяющийся символ без приведения к масиву

// 		} else {
// 			str2 += someStr[i];
// 		}
// 	}
// 	return str2;
// }
console.log(str2);

let z = 15;
let count = (z) =>{
	for (i = 1; i <= z; i++){
		if(i % 2 !== 0){
			console.log(i);
		}
	}
}
count(z)
