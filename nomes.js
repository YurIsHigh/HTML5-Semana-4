const nomes = ["Yuri", "Matheus", "Santos"];

// forEach para imprimir saudação
nomes.forEach(nome => {
    console.log(`Olá, ${nome}!`);
});

// map para criar novo array em maiúsculas
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

console.log(nomesMaiusculos);

//Saída: 
// Olá, Yuri!

// Olá, Matheus!

// Olá, Santos!

// ["YURI", "MATHEUS", "SANTOS"]