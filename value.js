let numbers =[3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers){
	let result= Math.max(...numbers);
	return result;

}
console.log(result(numbers));