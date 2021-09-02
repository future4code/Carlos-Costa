//Exercício de interpretação
//1
//const filme = {
//  nome: 'Auto da Compadecida',
//  ano: 2000,
//  elenco: [
//    'Matheus Nachtergaele',
//   'Selton Mello',
//   'Denise Fraga',
//   'Virginia Cavendish'
//  ],
//  transmissoesHoje: [
//    { canal: 'Telecine', horario: '21h' },
//   { canal: 'Canal Brasil', horario: '19h' },
//    { canal: 'Globo', horario: '14h' }
//  ]
//}

//console.log(filme.elenco[0])
//console.log(filme.elenco[filme.elenco.length - 1])
////console.log(filme.transmissoesHoje[2])

//R: Matheus Nachtergaele
// Virginia Cavendish
//objeto: {canal: 'canal Brasil', horario: '19h'}

//2A
//console.log(cachorro) = objeto: {nome:'Juca', idade: 3, raca: "SRD"}

//console.log(gato) = objeto: {nome: 'Juba', idade: 3, raca:"SRD"}

//console.log(tartaruga) = objeto: {nome: 'Jubo', idade:3, raca: "SRD"}

//B - Os três pontos significa que estamos usando o método spread ou espalhamento, ou seja, estamos pegando as propriedades do objeto e colocando em outro objeto.

//3. a

//console.log(minhaFuncao(pessoa, "backender")) = falso
//console.log(minhaFuncao(pessoa, "altura")) =  undefined

//b -  foi impresso no primeiro console o valor false que se trata do valor da propriedade "backender" e no segundo console foi impresso o valor undefined, porque o objeto não possui a propriedade "altura"

//exercícios de interpretação
//1.a

const people = {
  nome: 'Carlos',
  apelido: ['Carlinhos', 'Carlitos', 'ED']
}

function nameAndNickName(people) {
  const newPeople = { ...people }

  return newPeople
}

const resposta = nameAndNickName(people)
console.log(
  `Eu sou ${resposta.nome}, mas pode me chamar de: ${resposta.apelido[0]}, ${resposta.apelido[1]} ou ${resposta.apelido[2]}`
)
//b

const pessoa = {
  ...people,
  apelido: ['thiaguinho', 'pixote', 'bucheca']
}

function nameAndNickName(pessoa) {
  const novaPessoa = { ...pessoa }

  return novaPessoa
}

const novaResposta = nameAndNickName(pessoa)
console.log(
  `Eu sou ${novaResposta.nome}, mas pode me chamar de: ${novaResposta.apelido[0]}, ${novaResposta.apelido[1]} ou ${novaResposta.apelido[2]}`
)

//2.a

const pessoas = {
  nome: 'eduardo',
  idade: 25,
  profissao: 'estudante'
}

const novaPessoa = {
  nome: 'marcos',
  idade: 28,
  profissao: 'medico'
}

//b
function pesssoaAqui(pessoas, novaPessoa) {
  let dadosPessoas = []

  dadosPessoas.push(pessoas.nome)
  dadosPessoas.push(pessoas.nome.length)
  dadosPessoas.push(pessoas.idade)
  dadosPessoas.push(pessoas.profissao)
  dadosPessoas.push(pessoas.profissao.length)
  dadosPessoas.push(novaPessoa.nome)
  dadosPessoas.push(novaPessoa.nome.length)
  dadosPessoas.push(novaPessoa.idade)
  dadosPessoas.push(novaPessoa.profissao)
  dadosPessoas.push(novaPessoa.profissao.length)
  console.log(dadosPessoas)
  return dadosPessoas
}

pesssoaAqui(pessoas, novaPessoa)

//3

let carrinho = []

const primeiraFruta = {
  nome: 'banana',
  disponibilidade: true
}

const segundaFruta = {
  nome: 'maca',
  disponibilidade: false
}

const terceiraFruta = {
  nome: 'mamao',
  disponibilidade: true
}

function carrinhoDeFruta(primeiraFruta, segundaFruta, terceiraFruta) {
  carrinho.push(primeiraFruta)
  carrinho.push(segundaFruta)
  carrinho.push(terceiraFruta)

  console.log(carrinho)
  return carrinho
}

carrinhoDeFruta(primeiraFruta, segundaFruta, terceiraFruta)
