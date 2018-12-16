/* comentario
var mensagem= "Olá Mundo";
alert(mensagem);

var a = 2;
var b = 3;
var soma = a+b;
var sub = a-b;
var mult = a*b;
var c = "Ola Mundo";

/*alert(3%2);


if (c%2==1){
  alert("Numero Impar")
}
else if (c == 0){
   alert("Numero Par")
}
else{
	alert("Isto nao é um numero valido")
}========================
var i = 0;
while (i < 3){
	alert(i);
	i = i+1;
}
/*laco for
var j;
for(var j = 0; j<3; j++){
	alert(j)
}==============================

var numero = 6;
var decimal= 4.5;
var texto= "Ola Mundo";
var lista=["laranja", "maca", "banana"];
 

for(i in lista){
	alert(lista[i])
}
=================

function soma(a, b){
	console.log(a+b);
}
/*soma(2, 6);

function subtracao(a, b){
	return a-b
}
var s = subtracao(5, 3);
console.log(s);*/
function mensagem(nome){
	alert("Ei nao clique em mim "+nome )
}
function mensagem1(nome){
	alert("Ei volta aqui!")
}
function mudaCor(cor){
	var elento = document.getElementById("men");
	elento.style.color =cor;
}
function valida(){
	var nome = document.getElementById('nome')
	if(nome.value==""){
		alert("Campo nome nao pode ser enviado em branco");

	}
	else{
		alert("Enviado com sucesso")
	}
}