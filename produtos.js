const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 },
    { nome: "Livro", preco: 45 }
];

// map para extrair os nomes
const nomesProdutos = produtos.map(produto => produto.nome);

// filter para produtos com preço menor que 50
const produtosBaratos = produtos.filter(produto => produto.preco < 50);

// reduce para somar todos os preços
const somaProdutos = produtos.reduce(
    (total, produto) => total + produto.preco,
    0
);

// forEach para imprimir os produtos
produtos.forEach(produto => {
    console.log(`${produto.nome}: R$ ${produto.preco}`);
});

console.log("Nomes:", nomesProdutos);
console.log("Produtos abaixo de R$ 50:", produtosBaratos);
console.log("Soma dos preços:", somaProdutos);

//Saída:

//Caderno: R$ 15
//Mochila: R$ 80
//Caneta: R$ 5
//Livro: R$ 45

//Nomes: ["Caderno", "Mochila", "Caneta", "Livro"]

//Produtos abaixo de R$ 50:
//[
  //{ nome: "Caderno", preco: 15 },
  //{ nome: "Caneta", preco: 5 },
  //{ nome: "Livro", preco: 45 }
//]

//Soma dos preços: 145
//``