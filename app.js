// 1. Alteração do texto do #titulo com querySelector
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Yuri";

// 2. Seleção dos parágrafos (.texto) e impressão no console
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log(p.textContent));

// 3. Inserção de 2 itens na #lista usando innerHTML
const lista = document.querySelector("#lista");
lista.innerHTML = `
  <li>Primeiro item</li>
  <li>Segundo item</li>
`;

// 4. Criação de um <li> com createElement e adição com append
const novoItem = document.createElement("li");
novoItem.textContent = "Terceiro item";
lista.append(novoItem);

// 5. Adição da classe "destaque" com classList.add e verificação com classList.contains
novoItem.classList.add("destaque");
console.log("O novo item tem a classe destaque?", novoItem.classList.contains("destaque"));

// 6. Percorrendo o array de tarefas, aplicando a classe "feito" e contando os itens
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach((tarefa, index) => {
  const li = document.createElement("li");
  li.textContent = tarefa;
  
  // Aplica a classe "feito" apenas ao primeiro item do array
  if (index === 0) {
    li.classList.add("feito");
  }

  lista.append(li);
});

// Impressão da quantidade total de itens <li> na lista
const totalItens = document.querySelectorAll("#lista li").length;
console.log("Quantidade total de itens na lista:", totalItens);

const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
    console.log("Nome atual:", campoNome.value);
});

const lista = document.querySelector("#lista")

lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log("Item clicado:", e.target.textContent);
    }
});

const liDinamico = document.createElement("li");
liDinamico.textContent = "Item adicionado via JS (teste delegation)";
lista.append(liDinamico);


const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const textoTarefa = campoTarefa.value.trim();

    if (textoTarefa === "") {
        return;
    }

    const novoLi = document.createElement("li");
    novoLi.textContent = textoTarefa;
    lista.append(novoLi);

    campoTarefa.value = "";
});