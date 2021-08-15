//break

var valor = 0;//declaração

while(true){//enquanto for verdade
	valor++;//incrementa

	if (valor>3){//se isso for verdade...
		break;//...para o programa
	}

	console.log(valor);//exibindo
}


//continue

const array = [1,2,3,4,5,6,7];

for (let posicao = 0; posicao < array.length; posicao++){
	const valor = array[posicao];

	if (valor %2 === 0){
		continue;//pula quando no caso a condição for verdadeira
	}

	console.log(valor);
}