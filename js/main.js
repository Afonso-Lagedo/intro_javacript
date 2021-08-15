let arr = [10,20,30,40];
arr.foo = "olá";//proriedade foo
// i == array position

for (let i in arr){//para cada elemento me traga a posição
	console.log(i);
}

for (let i of arr){//para cada elemento me traga o valor !Apenas valores numerados! por isso que não vem o "olá"
	console.log(i);
}