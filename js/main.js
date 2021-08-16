'use strict'

class Person {
	#name='';//modificador de acesso
	
	constructor(initialName){
		this.#name = initialName;
	}

	setName(name){
		this.#name=name;
	}

	getName(){
		return console.log(this.#name);
	}
}

const p = new Person("Afonso");

//console.log(p);

p.getName();

p.setName('Felipe');

p.getName();