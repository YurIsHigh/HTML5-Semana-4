const precos = [10, 25, 40, 5, 60];

// filter para preços acima de 20
const precosAcimaDe20 = precos.filter(preco => preco > 20);

// reduce para somar todos os preços
const somaPrecos = precos.reduce((total, preco) => total + preco, 0);

console.log(precosAcimaDe20);
console.log(somaPrecos);

// Saída:

// [25, 40, 60]

// 140