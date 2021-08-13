const user = ['Afonso','Felipe', 'Rafaela'];

const gender ={//tipo "ENUM"
	MAN: Symbol('M'),
	WOMAN: Symbol('W')
}

const persons =[//array pessoas
	{
		name: 'Afonso',
		age:27,
		gender: gender.MAN
	},
	{
		name: 'Felipe',
		age:4,
		gender: gender.MAN
	},
	{
		name: 'Rafaela',
		age:29,
		gender: gender.WOMAN
	}
]

//exibindo quantidade de elementos dentro do array
document.getElementById("demostracao0").innerHTML = 'Items: '+(persons.length);


//verificar se é array 
document.getElementById("demostracao1").innerHTML = 'É array: '+(Array.isArray(persons));


//interar os itens do array arrowfunction
//para cada item da do array
persons.forEach((person, index, arr) => {
	console.log(`Nome: ${person.name} index: ${index}`, arr);
});

//filtrando array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('MANS: ', mens);

//filtrando array exemplo dois
const womans = persons.filter(person2 => person2.gender === gender.WOMAN);
console.log('WOMANS: ', womans);

//adicionando elemento no array através do map
const personsWithTime = persons.map(person => {
	person.time="Corinthians";
	return person;
});

persons.forEach((arr) => {//exibindo array após a adição do time
	console.log(arr);
});

//transformar array em outro tipo 
const totalAge = persons.reduce((age, person) =>{
	age += person.age;
	return age
},0);

document.getElementById("demostracao2").innerHTML = 'Total age: '+(totalAge);

//somar a idade de todas as pessoas que tem idade ímpar
const totalOddAges = persons
		.filter(person => person.age % 2 === 1)//filtrando
		.reduce((age, person ) => {
					age += person.age;
					return age;
				},0);

document.getElementById("demostracao3").innerHTML = 'Total Odd age: '+(totalOddAges);