//exercício de interpretação de código
//1
//a. O código irá realizar a pegar o resto da operação entre a variavél número por dois e verificar se ela é par. se o resto for par, irá imprimir a mensagem "Você passou no teste", senão irá imprimir "Não passou no teste"

//b. Para quando o resultado da operação for par.
//c. Para quando o resultado da operação for ímpar.

//2a.O código irá verificar no se em cada caso se o valor atribuido a variável fruta é igual ao valor inicial da mesma, se for encontrado o valor igual, será atribuido na variavél preco um valor., em seguida irá imprimir uma mensagem contendo o nome da fruta e seu preço.

//b. Será impressa a mensagem => "O preco da Maçã é R$ 2.25"

//c.Iria ser retirado impresso a mensagem => "O preço da Pêra é R$ 5"

//3a. A primeira linha está pedindo para o usuário digitar o número e usando a função "Number" o número é convertido em um valor do tipo number e esse valor é atribuido a variavél numero.

//b. Iria aparecer que a variavél mensagem não foi definida.

//c.Iria gerar um erro no console.log(mensagem), porque a variavél mensagem está definida dentro do escopo do condicional if e ela está sendo impressa fora do escopo e para não dar erro a variável tinha que ser impressa junto do escopo ao qual ela foi atribuída.

//Exercícios de escrita de código.
//1
const idade = Number(prompt('Digite sua idade'))

if (idade >= 18) {
  console.log('Você pode dirigir')
} else {
  console.log('Você não pode dirigir')
}

const horarioDeEstudo = prompt('Em qual período você estuda?')

if (horarioDeEstudo == 'M' || horarioDeEstudo == 'm') {
  console.log('Bom dia!')
} else if (horarioDeEstudo == 'V' || horarioDeEstudo == 'v') {
  console.log('Boa tarde!')
} else {
  console.log('Boa noite!')
}

switch (horarioDeEstudo) {
  case 'm' || 'M':
    console.log('Bom dia!')
    break
  case 'v' || 'V':
    console.log('Boa tarde!')
    break
  default:
    console.log('Boa noite!')
    break
}

const genero = prompt('Digite o gênero do filme')
const valorIngresso = Number(prompt('Digite o valor do ingresso'))

if (genero == 'fantasia' && valorIngresso <= 15) {
  console.log('Bom filme')
} else {
  console.log('Escolha outro filme')
}
