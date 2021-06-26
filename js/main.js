var lista = ["Afonso", "Henriques"];
console.log (lista);//imprime o array inteiro

console.log(lista[1]); //imprime a posição 1 do array
alert(lista[0]);//Idem linha superior com Alert na posição 0 do array

//adicioando elementos na lista
lista.push("Silva");
console.log (lista);

//tirar ultimo elemento da lista
lista.pop();
console.log (lista);

//exibindo o quantidade de posições no array
console.log(lista.length);

//inverter a exibição dos elementos
//console.log(lista.reverse());

//para exibição em formato String
console.log(lista.toString());

//para exibição da primeira letra do primeiro elemento
console.log(lista.toString()[0]);

//para exibição dos elementos sem a vírgula
console.log(lista.join(" "));//com espaço no caso, poderia ser com -: join("-")


//********DICIONÁRIO*********
var nome = {primeiro:"Afonso", segundo:"Henriques"}
console.log(nome);

//elemento especifico 
console.log(nome.primeiro);


//******LISTA DE DICIONÁRIOS*******
var nomes = [{primeiro:"Afonso", segundo:"Henriques"}, {primeiro:"Felipe", segundo:"Lagedo"}]
console.log(nomes);

//alert na posição especifica 
alert(nomes[1].segundo);
