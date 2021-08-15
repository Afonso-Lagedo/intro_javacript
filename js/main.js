//Spread
var pecas = ['roda', 'portas'];
var carro = ['motor', ...pecas, 'escapamento'];
//mesma coisa que var carro = ['motor', 'roda', 'portas', 'escapamento'];

//exibindo
document.getElementById("demostracao0").innerHTML = 'Items: '+(carro);

//Spread com função
function fn (x,y,z){} //função fn que recebe x,y,z
var args = [0,1,2]; // vetor args
fn(...args);// passando como parâmetro pra função fn os elementos de args

/*

####mais alguns operadores#####
delete //para deletar um elemento
typeof //para retornar o tipo

*/

//in

var carro2 = new Array("camaro", "corsa");
0 in carro2; //retorna true
5 in carro2; //retorna false
"camaro" in carro2; //retorna false pois trabalha com índe e não valor 
"length" in carro2; //retorna true por ser uma propriedade de arrays e strings

//in Objetos
var meucarro={marca:"Honda", modelo:"Accord"};
"marca" in meucarro; //retorna true

//operador unário para verificar se é instância
var dia = new Date(2021, 8, 15);

if(dia instanceof Date){//true
	//code
}