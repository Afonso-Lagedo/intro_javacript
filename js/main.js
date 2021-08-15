const array = [2,3,4,5,6];//criando array

array.forEach(item =>{ //para cada item do array faça (item é a posição no caso)
	if(item % 2 === 0){// se for par...
		console.log(`O número ${item} é par`);//... faça isso
	}
	else{//se não for... 
		console.log(`O número ${item} é impar`);//...faça isso
	}

});

//else if

array.forEach(item =>{ //para cada item do array faça (item é a posição no caso)
	if(item % 2 === 0){
		console.log(`O número ${item} é divisível por 2`);//o número 6 trava aqui por mais que seja divisível por 3 também
	}
	else if(item % 3 === 0){
		console.log(`O número ${item} é divisível por 3`);
	}
	else if(item % 5 === 0){
		console.log(`O número ${item} é divisível por 5`);
	}
});

//para testar mais de uma função (no caso do 6)

array.forEach(item =>{ //para cada item do array faça (item é a posição no caso)
	if(item % 2 === 0){
		console.log(`O número ${item} é divisível por 2`);
	}
	if(item % 3 === 0){
		console.log(`O número ${item} é divisível por 3`);
	}
	if(item % 5 === 0){
		console.log(`O número ${item} é divisível por 5`);
	}
});