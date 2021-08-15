let arr = [3,5,7];
arr.foo = "olá";
// i == array position

for (let i in arr){//para cada elemento me traga a posição
	console.log(i);
}

for (let i of arr){//para cada elemento me traga o valor
	console.log(i);
}