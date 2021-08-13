function fn (){// declaração de função comum
	return 'teste1';
}

const arrowFn0 = () => 'teste2'; //arrow function, não preciso abrir o bloco para uma declaração
const arrowFn1 = () => {
	//Para mais de uma expressão
	return 'teste3';
}

document.getElementById("demostracao0").innerHTML = fn();//exibição no html no id demostracao
document.getElementById("demostracao1").innerHTML = arrowFn0();
document.getElementById("demostracao2").innerHTML = arrowFn1();