// Exercício 1 
// Na função console.log(a, b), irá imprimir os valores console.log(10, 5)

//Exercicío 2
//Console.log(10, 10, 10), no exercicío, os valores de a, b e c é 10.

//Exercícios 3
/*
let periodoDeTrabalho = prompt ("Quantas horas você trabalha por dia?")
let  pagamentoDiario = prompt("Quanto você recebe por dia ?")
alert('Você recebe ${pagamentoDiario/periodoDeTrabalho} por hora')
*/
//Exercícios de escrita de código

//Exercício 1

let nome;
let idade;

console.log(typeof(nome), typeof(idade));
//O tipo impresso das variáveis name e idade foi undefined, porque as variaveis não estão definidas.

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

console.log(typeof(nome), typeof(idade));
//Agora as variaveis possuem um valor atribuido a elas, que seria uma string.

console.log("Olá ", nome,", você tem ", idade, "anos");

//Exercício 2

const felicidade = true;
const  jogoFutebol = false;
const  roupaMolhada =  true;

console.log("Você está feliz hoje?", felicidade);
console.log("Sua roupa está molhada por conta da chuva?", roupaMolhada);
console.log("Você jogou bem no futebol hoje?", jogoFutebol);

//Exercicio 3

let a = 10;
let b = 25;
let c

c = a
a = b
b = c

console.log(a,b);

//Desafio

let primeiroNumero = Number(prompt("Digite o primeiro número"));
let segundoNumero = Number(prompt("Digite o segundo número"));

let x = primeiroNumero + segundoNumero;
let y = primeiroNumero * segundoNumero;

console.log("O primeiro número somado ao segundo número resulta em: ",x);
console.log("O primeiro número multiplicado pelo segundo número resulta em: ",y);




