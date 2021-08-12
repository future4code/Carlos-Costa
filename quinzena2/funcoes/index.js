//exercícios de interpretação de código
/*
1.a- console.log(minhaFuncao(2)) => console.log(10)
      console.log(minhaFuncao(10)) => console.log(50)

b- Seria retornado os valores 10 e 50.

2.a - A função recebe um dado e se o dado for uma string, ele irá deixar a string com letras minúsculas e a string tiver a palavra cenoura em sua sentença irá retornar o valor True.

b.True, True, True
*/
//Exercícios de escrita de codigo
function dadosPessoais() {
  const nome = 'Carlos'
  const idade = 26
  const cidade = 'Poços de Caldas'
  const profissao = 'Tecnico em Telecomunicações'
  console.log(
    'Eu sou ' +
      nome +
      ' tenho ' +
      idade +
      ' anos, ' +
      ' moro em ' +
      cidade +
      ' e sou ' +
      profissao
  )
}

dadosPessoais()

//b
function informacoesDoUsuario(name, age, address, job) {
  console.log(
    'Eu sou ' +
      name +
      ' tenho ' +
      age +
      ' anos, ' +
      'moro em ' +
      address +
      ' e sou ' +
      job
  )
}

informacoesDoUsuario('Carlos', 26, 'Poços de caldas', 'estudante')

//2a.

function somaNumeros(num1, num2) {
  console.log(num1 + num2)
}

somaNumeros(3, 4)

//b.

function comparaNumero(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(true)
  } else {
    console.log(false)
  }
}

comparaNumero(3, 5)

//c.

function valorPar(valorDoNumero) {
  if (valorDoNumero % 2 === 0) {
    console.log('O numero é Par!')
  } else {
    console.log('O numero é ímpar!')
  }
}

valorPar(3)

//d.

function novaMensagem(mensagem1) {
  console.log(mensagem1.toUpperCase())
}

novaMensagem('Hello World!')

//3.

function somaDeNumeros(valores1, valores2) {
  console.log('Soma: ' + valores1 + valores2)
}
somaDeNumeros(
  Number(prompt('digite o primeiro valor')),
  Number(prompt('digite o segundo valor'))
)

function subtracaoDeValores(valores1, valores2) {
  console.log('Diferença: ' + valores1 - valores2)
}
subtracaoDeValores(
  Number(prompt('digite o primeiro valor')),
  Number(prompt('digite o segundo valor'))
)

function multiplicacaoDeDados(valores1, valores2) {
  console.log('Multiplicação: ' + valores1 * valores2)
}
multiplicacaoDeDados(
  Number(prompt('digite o primeiro valor')),
  Number(prompt('digite o segundo valor'))
)

function divisaoDeNum(valores1, valores2) {
  console.log('Divisão: ' + valores1 / valores2)
}

divisaoDeNum(
  Number(prompt('digite o primeiro valor')),
  Number(prompt('digite o segundo valor'))
)
