'use strict'

class Carro {
	constructor(qntRodas){
		this.qntRodas=4;
	}
}

class MuscleCar extends Carro{
	constructor(rapido){
		super(4);
		this.rapido = "sim";
	}
} 

const camaro = new MuscleCar(true);

console.log(camaro);