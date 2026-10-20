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

} else if (idadevotação >= 18) {
    //senão a idade da pessoa for maior ou igual a 18
    console.log("VÁ VOTAR")
} else if{
    //senão a idade da pessoa for maior ou igual a 16
    console.log ("você não é obrigado a votar, mas pode")
}
else {
    //senão for nenhuma das anteriores
    console.log("você NÃO pode votar");
}
