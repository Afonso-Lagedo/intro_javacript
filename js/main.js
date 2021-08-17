function botao(){
	alert("teste");
}

function botao2(){
	document.getElementById("btn2").innerHTML = "<b>teste botão 2</b>";
}

function botao3(){
	//window.location.href = "SITE" para abrir na mesma aba
	window.open("https://github.com/Afonso-cmd/intro_javacript");//para abrir em outraaba
}

function trocar(){
	document.getElementById("mouse").innerHTML = "PASSOU O MOUSE"
}

function voltar(){
	document.getElementById("mouse").innerHTML = "PASSE O MOUSE"
}

function trocarDireto(elemento){
	elemento.innerHTML = "PASSOU O MOUSE"
}

function voltarDireto(elemento){
	elemento.innerHTML = "PASSE O MOUSE"
}

function load(){
	alert("página carregada");
}

function escolha(elemento){
	console.log(elemento.value);
}