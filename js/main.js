const persons = Array.of ('Afonso','Felipe', 30); //cria conforme a quantidade de parâmetros instanciados 
console.log(persons);

const persons2 = Array (3);
console.log(persons2);// posições vazias 

const persons3 = Array('Afonso', 'Feipe');//tipo Array.of
console.log(persons3);

const divs = document.querySelectorAll('div');
console.log(divs);//node list não funciona as funções de arrays

const divArray = Array.from(divs);//transformando nodeList em um Array
console.log(divArray);

//Adicionando valores no final

const carros =['camaro','corsa'];
console.log(carros);
carros.push('uno');//adicionando vaalor ao array
console.log(carros);

//Removendo valores no final
carros.pop();
console.log(carros);

//Adicionando valor no início
carros.unshift('uno');
console.log (carros);


//Removendo valor no início
carros.shift();
console.log (carros);

const carros2= ['onix', 'doblo'];
//juntando arrays sem afetar os envolvidos
const superCaros= carros.concat(carros2);

console.log(superCaros);

//Fatiando Array 
console.log(carros.slice(0,1));//posição final e inicia que será o intervalo do corte

//fatiar apartir da posição1
console.log(carros.splice(1));

//Adiciona no zero, remove zero com valor C3
console.log(carros.splice(0,0,'C3'));
console.log(carros);