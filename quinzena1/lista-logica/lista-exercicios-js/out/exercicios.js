// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura do retângulo')
  const largura = prompt('Digite a largura do retângulo')

  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = prompt('Em que ano estamos?')
  const anoDeNascimento = prompt('Qual é o seu ano de nascimento?')

  console.log(anoAtual - anoDeNascimento)
}

// Exercício 3
function calculaIMC() {
  const peso = prompt('Qual é o seu peso?')
  const altura = prompt('Qual é a sua altura?')

  console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite o seu nome')
  const idade = prompt('Digite sua idade')
  const email = prompt('Digite seu email')

  console.log(
    'Meu nome é ' +
      nome +
      ', tenho ' +
      idade +
      ' anos, e o meu email é ' +
      email
  )
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const primeiraCorFavorita = prompt('Qual é a sua primeira cor favorita?')
  const segundaCorFavorita = prompt('Qual é a sua segunda cor favorita?')
  const terceiraCorFavorita = prompt('Qual é sua terceira cor favorita?')
  let listaDeCores = []

  listaDeCores.push(primeiraCorFavorita)
  listaDeCores.push(segundaCorFavorita)
  listaDeCores.push(terceiraCorFavorita)

  console.log(listaDeCores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const letraMaiuscula = prompt('Digite uma palavra')

  console.log(letraMaiuscula.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoIngresso = prompt('Digite o valor do ingresso')
  const valorIngresso = prompt('Digie o valor do ingresso do cinema')

  console.log(custoIngresso / valorIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let primeiraLetra = prompt('Digite uma string')
  let segundaLetra = prompt('Digite uma segunda string')

  if (primeiraLetra.length == segundaLetra.length) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const primeiraPalavra = prompt('Digite a primeira palavra')
  const segundaPalavra = prompt('Digite uma segunda palavra')

  if (primeiraPalavra === segundaPalavra) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Digite o ano atual'))
  const anoDeNascimento = Number(prompt('Em qual ano você nasceu?'))
  const emissaoRG = Number(prompt('Em qual ano foi emitido o seu RG?'))
  const idade = anoAtual - anoDeNascimento
  const periodoDeRenovacao = anoAtual - emissaoRG

  if (idade <= 20) {
    if (periodoDeRenovacao === 5) {
      console.log(true)
    } else {
      console.log(false)
    }
  } else if (idade > 20 && idade <= 50) {
    if (periodoDeRenovacao === 10) {
      console.log(true)
    } else {
      console.log(false)
    }
  } else {
    if (periodoDeRenovacao === 15) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
}

// Exercício 11
function checaAnoBissexto() {
  const anoBissexto = Number(prompt('Digite um ano'))

  if (
    (anoBissexto % 4 == 0 && anoBissexto % 100 !== 0) ||
    anoBissexto % 400 == 0
  ) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt('Digite a sua idade')
  const ensimoMedioCompleto = prompt('Você terminou o ensino medio')
  const horarioDisponivel = prompt('Você possui disponibilidade de horario?')

  if (
    idade === 'sim' &&
    ensimoMedioCompleto === 'sim' &&
    horarioDisponivel === 'sim'
  ) {
    console.log(true)
  } else {
    console.log(false)
  }
}
