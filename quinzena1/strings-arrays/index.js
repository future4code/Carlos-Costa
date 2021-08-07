//Exercícios de interpretação de texto
/*
1.a- console.log('a. ', undefined) => a. undefined

array = null
b- console.log('b. ', array) => b. null

array =  [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) => c. 11

let i = 0
console.log('d. ', array[i]) => d. 3

array[i+1] = 19
console.log('e. ', array) => e. false

const valor = array[i+6]
console.log('f. ', valor) => f. 9

2.  SUBI NUM ONIBUS EM MIRROCOS 27

*/
// Exercícío de escrita de codigo

const nameDoUsuario = prompt('Qual é o seu nome?')
const emailDoUsuario = prompt('Digite o seu email')

console.log(
  'O e-mail ' +
    emailDoUsuario +
    ' foi cadastrado com sucesso. ' +
    'Seja bem-vinda(o), ' +
    nameDoUsuario
)

//exercicio2
const comidasPreferidas = [
  'lasanha',
  'comida japonesa',
  'lanche artesanal',
  'sorvete',
  'pipoca',
  'doce de leite'
]
console.log(comidasPreferidas)

console.log(
  'Essas são minhas comidas preferidas: ' +
    '\n' +
    comidasPreferidas[0] +
    '\n' +
    comidasPreferidas[1] +
    '\n' +
    comidasPreferidas[2] +
    '\n' +
    comidasPreferidas[3] +
    '\n' +
    comidasPreferidas[4] +
    '\n' +
    comidasPreferidas[5] +
    '\n'
)

const comidaUsuario = prompt('Qual é a sua comida preferida?')

comidasPreferidas[1] = comidaUsuario

console.log(comidasPreferidas)

//exercicio3

const listaDeTarefas = []
const tarefaNumeroUm = prompt('Digite a primeira tarefa')
listaDeTarefas.push(tarefaNumeroUm)
const tarefaNumerodois = prompt('Digite a segunda tarefa')
listaDeTarefas.push(tarefaNumerodois)
const tarefaNumeroTres = prompt('Digite a terceira tarefa')
listaDeTarefas.push(tarefaNumeroTres)

console.log(listaDeTarefas)

const tarefas = prompt('Digite o indice de uma das tarefas')

listaDeTarefas.splice(tarefas, 1)

console.log(listaDeTarefas)
