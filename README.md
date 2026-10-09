# Projeto Exercícios DOM & JavaScript Moderno

Este projeto consiste em uma série de exercícios práticos desenvolvidos para consolidar conceitos essenciais de JavaScript ES6+ e manipulação do Document Object Model (DOM). O objetivo principal é demonstrar a construção de aplicações web interativas com código limpo, performático e modular.

---

## 🚀 Conceitos e Tecnologias Aplicadas

### 1. Métodos Funcionais de Array (`map`, `filter`, `reduce`)
A manipulação de dados no projeto faz uso extensivo dos principais métodos iterativos de arrays do JavaScript:

* **`map()`**: Utilizado para transformar dados. Ele percorre o array original e retorna um **novo array** com o mesmo tamanho, contendo os elementos modificados por uma função de callback.
* **`filter()`**: Utilizado para filtragem de dados. Ele analisa cada elemento do array com base em uma condição lógica e retorna um **novo array** apenas com os itens que retornarem `true`.
* **`reduce()`**: Utilizado para agregação. Ele itera sobre o array e acumula todos os seus valores em um **único resultado final** (como uma soma total, uma média ou um objeto agrupado).

---

### 2. Lógica de Manipulação do DOM
A interação com a interface da página é feita através da API nativa do DOM no navegador:

* **Seleção de Elementos**: Uso de `querySelector` (para seleções pontuais via id, classe ou tag) e `querySelectorAll` (para captura de múltiplos elementos em forma de `NodeList`).
* **Criação e Modificação**: Instanciação de novos elementos em memória com `document.createElement()`, definição de conteúdo com `textContent` e alteração dinâmica da estrutura da página com `.append()`.
* **Gerenciamento de Estilos e Classes**: Alteração do estado visual dos elementos através da API `classList` (`add`, `remove`, `contains` e `toggle`), garantindo uma separação clara entre a lógica em JavaScript e os estilos em CSS.

---

### 3. Event Delegation e Otimização de Performance
Em vez de vincular um escutador de eventos (*event listener*) individual para cada item (`<li>`) da lista, foi adotada a técnica de **Event Delegation** (Delegação de Eventos).

#### Por que isso é importante?
1. **Otimização de Memória e Performance**: Adicionar centenas ou milhares de *listeners* individuais consome muita memória do navegador. Ao registrar **um único listener** no elemento pai (`<ul>`), o evento é capturado na fase de borbulhamento (*bubbling*), reduzindo o consumo de recursos.
2. **Suporte a Elementos Dinâmicos**: Elementos criados via JavaScript após o carregamento inicial da página não possuem *listeners* atrelados a eles. Com a delegação de eventos, como o listener está no pai (`<ul>`), qualquer novo `<li>` inserido dinamicamente funcionará automaticamente ao ser clicado, sem a necessidade de reanexar eventos.

---

## 🛠️ Como Executar
1. Clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
