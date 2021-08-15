const carro = 'uno';

switch(carro){
	case'camaro':
	console.log ('R$100.000,00');
	break;
	case'corsa':
	case'uno':
	console.log ('R$20.000,00');
	break;
	default:
	console.log ('carro fora da lista');
	break;
}