console.log("################Design patterns");
console.log("#########DECORATOR");

//1
function Person (){
	return{
		name:'Afonso',
		lastname:'Silva'
	}
}

const x = Person();//não instancia com new
console.log(x);

//2
function Person2 (name){
	return{
		name,
		lastname:'Silva'
	}
}

const y = Person2('Afonso');//não instancia com new
console.log(y);

//3
function Person3 (customProperties){
	return{
		name:'Afonso',
		lastname:'Silva',
		...customProperties
	}
}

const w = Person3({name:'Felipe', age: 27});//sobre escrever e adicionar valores 
console.log(w);


console.log("#########SINGLETON");
function Pessoa(){
	if(!Pessoa.instance){
		Pessoa.instance = this;
	}

	return Pessoa.instance;
}

const p = Pessoa.call({ name:'Afonso'});

const p2 = Pessoa.call({name:'Felipe'});

console.log(p);

console.log(p2);//Uma vez que a classe foi instanciada, não poderá retornar outro valor 


console.log("#########DECORATOR");
//função que recebe função
let valor = false;

function callIfFuncao(fn){
	return !! valor && (fn);
}

function sum (a,b){
	return a + b;
}

console.log(callIfFuncao(sum(2,3)));//retorna 2+3 se var valor for true
valor = true;
console.log(callIfFuncao(sum(2,3)));//retorna 2+3 se var valor for true
valor = false;
console.log(callIfFuncao(sum(2,3)));//retorna 2+3 se var valor for true

console.log("#########OBSERVER");
class Observable{
	constructor(){//deve ter uma lista
		this.lista =[];
	}

	subscribe(fn){//para adicionar
		this.lista.push(fn);
	}

	notify(data){//rebe o dado
		this.lista.forEach(fn => fn(data));//para cada elemento da lista chama a função passando o dado
	}
	unsubscribe(fn){//filtra na linha os que forem diferentes
		this.lista = this.lista.filter(obs => obs !== fn);
	}
}

const ob = new Observable();
//preenchendo
const log1 = data => console.log(`Subscribe 1: ${data}`);
const log2 = data => console.log(`Subscribe 2: ${data}`);
const log3 = data => console.log(`Subscribe 3: ${data}`);

ob.subscribe(log1);
ob.subscribe(log2);
ob.subscribe(log3);
//passando valor
ob.notify('primeiro notify');

ob.unsubscribe(log2);//removendo log2

ob.notify('segundo notify');

console.log("#########MODULE");
let name ='Afonso';

function getName(){
	return name;
}
function setName(name){
	name=newName;
}

module.exports = {
	getName,
	setName
};

