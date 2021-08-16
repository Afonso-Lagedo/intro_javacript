//forEach
const carros = Array.of('camaro', 'doblo', 'vectra');
carros.forEach(carro => console.log(carro));

//map
const arr =[1,2,3,4,5];
console.log(arr.map(valor => valor *2));// retorna o array com a nova condição imposta, no caso *2 para para valor OBS não mexe na referência do array

//flat
const a = [1,2,[3,4]];// temos um array dentro de um array
const b =  a.flat();//concatena os arrays "pai e filho"
console.log(a);
console.log(b);

const c = [1,2,[3,[4]]];
console.log(c);
console.log(c.flat());
console.log(c.flat(2));//profundidade

//flatMap
const h = [1,2,3,4];
console.log(h.flatMap(value =>[[value * 2]]));

//Interator
const frutas=["abacaxi", "maçã", "manga"];
const exemplo = frutas.entries();// função retorna chave/valor
console.log(exemplo);
console.log(exemplo.next());
console.log(exemplo.next());

//find e filter
const n =[1,2,3,4];
console.log(n.find(value => value>2));//primeiro elemento que satisfaz a condição
console.log(n.filter(value => value>2));//primeiro elemento que satisfaz a condição


//indexOf e lastIndexOf
const r = [1,2,3,3,4,3];
console.log(r.indexOf(3));//when the 3 first appears
console.log(r.lastIndexOf(3)); //when the 3 appears last time

//includes
console.log(r.includes(1));//return bool(true) if 1 exist in const r
console.log(r.includes(5));//return bool(true) if 5 exist in const r

//some
console.log(r.some( value => value % 2 === 0)); //return bool(true) if exist pair in const r

//every
console.log(r.every( value => value % 2 === 0)); //return bool(true) if all elements of const r are pairs

//sort => ordenation
console.log(r.sort());

//reverse
console.log(r.reverse());

//join
console.log(r.join('-'));//traformation of type of variable for String with separation 
