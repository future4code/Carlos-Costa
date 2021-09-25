//Exercícios de interpretação

//1. O código irá imprimir uma sequência de valores da variável valor que será alterado com a execução do loop.

//2. a Será impresso os valores de acima de 18.
//b.  No código o for of já reaiza a verificação de todos os elementos do array, então já é suficiente.

//3. No código acima será impresso 4 linhas contendo em cada uma uma sequência dos asteriscos somados.

//Exercícios de Escrita de código

//1.
const quantidadesDeAnimais = Number(prompt("quantos bichos você tem?"))

if(quantidadesDeAnimais <= 0 ){
    console.log("Que pena! Você pode adotar um pet!")
} else{
    const animal = []
    let i = 0
    while(i < quantidadesDeAnimais){
    const nomeDosAnimais = prompt("digite o nome dos animais")
    animal.push(nomeDosAnimais)
    i++
    }
    console.log(animal)
} 




//2.

const numerosEscolhidos = [9, 8, 20, 15, 21]

function arrayOriginal (){
    let  numerosImpressos
    for(let i = 0; i < numerosEscolhidos.length; i++){
    numerosImpressos = numerosEscolhidos[i]
    console.log(numerosImpressos)
    }
}

arrayOriginal(numerosEscolhidos)



//b
function valoresDivididos(){
    let  resultadoDaDivisao
    for(let i = 0; i < numerosEscolhidos.length; i++){
    resultadoDaDivisao = numerosEscolhidos[i] / 10
    console.log(resultadoDaDivisao)
    }
}

valoresDivididos(numerosEscolhidos)

//c
function valoresPares (paresV){
    let numerosPares = []
    for(let i = 0; i < paresV.length; i++){
        if (paresV[i] % 2 == 0){
            numerosPares.push(paresV[i])
            console.log(numerosPares)
        }
    }
}

valoresPares(numerosEscolhidos)

//d

function frasesComNumeros(newNumber){
    let novaFrase
    let novoArray = []

    for(let i = 0; i < newNumber.length; i++){
        novaFrase = `O elemento de indice ${i} é: ${newNumber[i]}`
        novoArray.push(newNumber[i])
        
        console.log(novaFrase)
        
    }
    console.log(novoArray)
}

frasesComNumeros(numerosEscolhidos)

//e


function comparacaoDeValores(numbers){
    let min = Math.min(numbers)
    let max = Math.max(numbers)

    console.log(min)
    console.log(max)
}

comparacaoDeValores(numerosEscolhidos)
