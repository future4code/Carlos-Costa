//Exercícios de interpretação de código

// 1.
//console.log("a. ", resultado) => resultado = true
//console.log("b. ", resultado) => resultado = false
//console.log("c. ", resultado) => resultado = true
//console.log("d. ", typeof resultado) => resultado = boolean

//2.
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/
//Será impresso a concatenação dos valores abaixo de cada uma das variavéis, pois se trata de duas strings e ambos os valores das variavéis serão concatenados.

//3.
/*
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

Utilize a função Number para transformar as strings em dados do tipo number, conforme a solução acima.
*/

//Exercícios de escrita de código
//1.
//a
const usuarioIdade = Number(prompt('Qual é a sua idade?'))
//b
const idadeMelhorAmigo = Number(prompt('Qual é a idade do seu melhor amigo?'))
const diferenca = usuarioIdade - idadeMelhorAmigo
const ageDiferent = true

//c
console.log('Sua idade é maior do que a do seu melhor amigo', ageDiferent)

//d
console.log(diferenca)

//2.
//a
const algarismoPar = Number(prompt('Digite um numero par'))
//b
console.log(algarismoPar % 2)
//c - Quando digito  varios números pares o resto sera sempre 0.
//d - Quando digito números impares o resto da divisão será 1.

//3.
const idade = Number(prompt('Qual é a sua idade?'))

console.log('Sua idade em meses é ' + idade * 12 + ' meses')
console.log('Sua idade em dias é ' + idade * 365 + ' dias')
console.log('Sua idade em horas é ' + idade * 8760 + ' horas')

//4.
const primeiroNumero = Number(prompt('Digite o primeiro numero'))
const segundoNumero = Number(prompt('Digite o segundo numero'))

console.log(
  'O primeiro é maior que o segundo?' + primeiroNumero > segundoNumero === true
)
console.log('O primeiro é igual ao segundo?' + primeiroNumero === segundoNumero)
console.log(
  'O primeiro é divísivel pelo segundo?' + (primeiroNumero % segundoNumero) ===
    0
)
console.log(
  'O segundo é divisivel pelo primeiro?' + (segundoNumero % primeiroNumero) ===
    0
)

//  Desafio

//1.a
let fahrenheit = 77
console.log(
  'O valor da tempertura em Kelvin é: ',
  (fahrenheit - 32) * (5 / 9),
  '  Kelvin'
)

//b
let celsius = 80
console.log(
  'O valor da temperatura em Fahrenheit é: ' +
    80 * (9 / 5) +
    32 +
    '  Fahrenheit'
)

//c
celsius = 30
console.log(
  'O valor da temperatura em kelvin e Fahrenheit é: ' +
    (fahrenheit - 32) * (5 / 9),
  ' Kelvin' + 80 * (9 / 5) + 32 + '  Fahrenheit'
)

//d
celsius = prompt('Digite a temperatura em celsius; ')
console.log(
  'O valor da temperatura em kelvin e Fahrenheit é: ' +
    (fahrenheit - 32) * (5 / 9),
  ' Kelvin' + 80 * (9 / 5) + 32 + '  Fahrenheit'
)

//2.
const energiaCusto = 0.05
console.log(
  ' O valor a ser pago pelo consumo é de: ' +
    'R$ ' +
    280 * energiaCusto +
    'reais'
)

//b.
let desconto = 0.15
console.log(
  'O valor a ser pago pelo consumo é de: R$ ' +
    280 * energiaCusto -
    280 * energiaCusto * desconto +
    ' reais'
)

//3a.
console.log('O valor correspondente a 20lb em Kg é:' + 20 * 0.45 + 'Kg')

//b
console.log('O valor correspondente a 10.5oz em Kg é:' + 10.5 * 0.028 + 'Kg')

//c
console.log(' O valor correnpondete a 100mi em M: ' + 100 * 1609.34 + 'metros')

//d
console.log('O valor correspondente a 50ft em M:' + 50 * 0.304 + 'metros')

//e
console.log(
  'O valor correspondente a 103.56gal em l:' + 103.56 * 3.78 + 'Litros'
)

//f
let unidadeXicara = 450
console.log(
  'O valor correspondente a 450xic em l:' + unidadeXicara * 0.24 + 'Litros'
)

//g
unidadeXicara = prompt('Digite o valor da unidade Xicara:')
console.log(
  'O valor correspondente a 50ft em M:' + unidadeXicara * 0.24 + 'metros'
)
