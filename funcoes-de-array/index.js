//Exercícios de interpretação de código

//1.a Será impresso uma linhas do array junto com seus os indices de cada lista e depois o array completo.

//2a. Será impresso um novo array contendo somente a propriedade nome do array usuário.

//3a. Será impresso um novo array contendo somente os elementos que não possuem a propriedade apelido igual a "Chijo".

//Exercícios de escrita de código.

//1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


 const nomeDosDogs = pets.map((pet, index, array) => {
     console.log(pet.nome)
 })


const racaDeCachorro = pets.filter((animais) => {
    return animais.raca === "Salsicha"
 })
 console.log(racaDeCachorro)

const cachorroEscollhido = pets.filter((pet) => {
    return pet.raca === "Poodle"
}).map((pet) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})

console.log(cachorroEscollhido)

//.2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeDosProdutos = produtos.map((prod) => {
     return prod.nome
 })

 console.log(nomeDosProdutos)

const produtosComDesconto = produtos.map((prod) => {
    delete prod.categoria
   return {...prod, preco: prod.preco*0.5}
    
})

console.log(produtosComDesconto)

const produtosComBebidas = produtos.filter((prodt) => {
    return prodt.categoria === "Bebidas"
})

console.log(produtosComBebidas)

const produtosComYpe = produtos.filter( prod => prod.nome.includes( "Ypê")
)

console.log(produtosComYpe)



const fraseComProdutosYpe = produtos.filter( prod => prod.nome.includes( "Ypê")
).map((prod) => {
    return `Compre ${prod.nome}  por ${prod.preco}`
})

console.log(fraseComProdutosYpe)
