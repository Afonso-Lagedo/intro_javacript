function Pessoa (nome){
	this.nome = nome;
}

const p = new Pessoa('Afonso');

console.log(p);

function Person (name){
	this.name = name;

	return{// return explícito
		name:'Teste'
	};
}

const p2 = new Person('Afonso');

console.log(p2);	

//teste de tipo
console.log(p instanceof Pessoa);//true 

console.log("#############");

function Carro (qntRodas){
	this.qntRodas = qntRodas;
}

function MuscleCar(rapido){
	Carro.call(this, 4);//contextualizando a roda para o camaro

	this.rapido=rapido;
}

const camaro = new MuscleCar(true);

console.log(camaro);