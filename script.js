//comsole.log() mostra uma informação no console
console.log("olá, mundo!");//string
console.log("typeof 13");//number
console.log("typeof true");//boolean

//variavel

//const não pode ter o valor alterado durante o programa
const nome = "Lurgas";
console.log(nome);

//let pode ter o valor alterado durante o programa
let idade = 17;
console.log(idade);
console.log("olá" + nome + ", que tem" + idade + " anos.");

idade = 18;
console.log(idade);
console.log(`olá ${nome} que tem ${idade} anos`);

//variavel2

const nome2 = "Deiki";
console.log(nome2);

let peso = "76.60 kg";

console.log(`Este é ${nome2}, e ${nome2} tem ${peso}`)

peso = "78.68 kg"

console.log(`${nome2} comeu um hamburguer e seu peso alterou para ${peso}`)

const texto = "azulbebe";

//altera todas as letra para maiuscula ou minuscula
console.log(texto.length);
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())

const nomeCompleto = "Geovanna Araujo Assis dos Santos"

const idadePessoa = 17

console.log(idadePessoa >= 18); //false
console.log(idadePessoa >= 16);//true


const angel = "Deiki"

console.log(angel == "Deiki");
console.log(angel == "Shin");

//coletamos a idade da pessoa
let idadeDaPessoa = 15
//verificar se a idade é maior ou igual a 18
if (idadeDaPessoa >= 18) {
    // se maior de 18 então ela é maior de idade
    console.log("já pode ser preso HAHHAHAHAH");

} else {
    //senão, então ela é menor de idade
    console.log("não vai pra baladaaaaaa 🤣🤣🤣🤣🤣");

}

//coletar a idade da pessoa
let idadevotação = 16
//verificar se a pessoa tem mais de 70
if (idadevotação > 70) {
    console.log("você não é obrigado a votar");

} else if (idadevotação >= 18)
    //senão a idade da pessoa for maior ou igual a 18
    console.log("VÁ VOTAR")



let idadeDirigir = 19;
let CNH = true;
let temCarro = false;

if(idadeDirigir >= 18 && CNH == true && temCarro == true){
    console.log("você pode dirigir");
    
}else{
    console.log("você não pode dirigir");
}

let ehProfessor = false
let ehAluno = false

if(ehProfessor == true || ehAluno == true){
    console.log("você tem direito a meia entrada");
    
}else{
    console.log("não tem direito a meia entrada");
    
}

// && = e
// || = ou

// parte 1-------------------------

let numeros = 10;

if (numeros >= 10 && numeros < 50) {
    console.log("está entre o intervalo");
    
}else{
    console.log("está fora do intervalo");
    
}

let idadeCand = 35;

if(idadeCand >= 16 && idadeCand < 25){
    console.log("atedeu os requisitos");
    
}else{
console.log("não atendeu os requisitos");
    
}

// parte 2-----------------------------


let valorCompra = 134;
let ehAssinante = true;

if(valorCompra >= 200 || ehAssinante == true){
    console.log("você não tem direito a frete gratis");
}else{
    console.log("você tem direito a frete gratis");
}


let diaDSemana = "segunda"

if(diaDSemana == "sabado" || diaDSemana == "domingo"){
    console.log("uaaau, aproveite seu fim de semana");
    
}else{
    console.log("vai trabaia");
    
}

//parte 3 ------------------------------

let compraUWU = 200
let Assinante = false;
let cupom = true;

if(Assinante == true && compraUWU >= 150 || cupom == true){
    console.log(`você tem direito ao desconto`);
    console.log(`total final ${compraUWU * 0.85}`);

}