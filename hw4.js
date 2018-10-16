let doubleArray =(arr) =>  arr.concat(arr);
let arr = [1,2,3];
console.log(doubleArray(arr));

let lastIndexOfArr = (arr) => arr[arr.length - 1];
console.log(lastIndexOfArr(arr));

let getArr = (n) => {
	let resoult = [];
	for (let i = 1; i <= n; i++){
		resoult.push(i);
	}
	return resoult;
}
console.log(getArr(10));

let changeCollection = (...rest) => {
	let resoult = rest;
	for(let i = 0; i < resoult.length; i++){
		resoult[i].shift();
	}
	return resoult;
};

console.log(changeCollection([1,2,3], ['a','b','c']));

let sortStr = (str) => str.split('').sort().reverse().join('');
console.log(sortStr('bcdaeflmjgkhi'));

let sortNumb = (arr2) => arr2.sort((prev,next) => next - prev);
console.log(sortNumb([2,4,7,1,-2,10,-9]))

let getNewArr = (arr, from, to) => arr.splice(from, to -1);
console.log(getNewArr(['a','b','c','d','e','f'],2,4));

let arr3 = ['one',2,'three',4];
console.log(doubleArray(arr3));

let arr4 = [1,2,3,4,5]
console.log(arr4.slice(2,4));

arr4.splice(2,2,'three','four');
console.log(arr4);

let arr5 = ['i','am','an','array'];
arr5.splice(3,0,'awesome');
console.log(arr5);

let sortArrLength = (arr) => arr.sort((prev, next) => prev.length - next.length);
console.log(sortArrLength([[14,45],[1],['a','b','c']]));

let arr6 = arr3.concat();
console.log(arr6);

let sortCore = (arr) => arr.sort((prev, next) => prev.info.cores - next.info.cores);
let core = [
	{
		cpu:'intel',
		info: {
			cores:2,
			cashe:3
		}
	},
	{
		cpu:'intel',
		info: {
			cores:4,
			cashe:4
		}
	},
	{
		cpu:'amd',
		info: {
			cores:1,
			cashe:1
		}
	},
	{
		cpu:'intel',
		info: {
			cores:3,
			cashe:2
		}
	},
	{
		cpu:'amd',
		info: {
			cores:4,
			cashe:2
		}
	},
];
console.log(sortCore(core));

