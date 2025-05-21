# Descrição do Projeto e Autoria
Nome do arquivo: README.md
Data de criação: 20/05/2025
Autor: José Roberto Silva Filho
Matrícula: 01741383 UNINASSAU

Descrição Arquivo README.md:
Instruções e informações do projeto React Pokémon TCG.

# Arquitetura do  Projeto React com Vite
A arquitetura de software com React se baseia em componentes reutilizáveis, facilitando a criação, manutenção e escalabilidade de aplicações. A modularidade dos componentes permite uma organização eficiente do código, resultando em desenvolvimento mais rápido e com menos erros. A utilização de Hooks e outras ferramentas do React, como o JSX, também contribui para a construção de interfaces de usuário complexas e personalizadas.

Este projeto foi criado utilizando [Vite](https://vitejs.dev/) com o template React.

# Scripts principais React com Vite

- `npm install` — Instala as dependências
- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera a build de produção
- `npm run preview` — Visualiza a build de produção localmente

# Estrutura inicial
- O código-fonte está na pasta `src/`
- O ponto de entrada é `src/main.jsx`

# Estrutura do Projeto e Descrição de suas funcionalidades:

*/public
  └─ index.html              // HTML principal do projeto React Pokémon TCG. Responsável por definir o ponto de montagem da aplicação React (div#root),
                 importar Bootstrap, fontes, ícones e carregar o bundle principal gerado pelo Vite.
/src                         // contém todo o código-fonte da aplicação React, incluindo o componente principal, o ponto de entrada, estilos customizados e todos os componentes reutilizáveis responsáveis pelas funcionalidades
  ├─ App.jsx                // Componente principal do projeto. Gerencia o layout geral do dashboard.
  ├─ main.jsx               // Ponto de entrada da aplicação React. Renderiza o App no elemento root do HTML.
  ├─ styles.css             // Estilos customizados CSS para o dashboard.
  └─ components/            // Componentes reutilizáveis da aplicação.
      ├─ SearchCard.jsx     // Campo de busca e exibição dos resultados da API.
      ├─ CardDetails.jsx    // Exibição detalhada das informações de uma carta.
      └─ SavedCardsBar.jsx  // Barra com miniaturas das cartas salvas pelo usuário.
.env  //  Variáveis de ambiente para o projeto
package.json                // Gerencia as dependências
vite.config.js              // Configuração do Vite
README.md                   // Instruções e informações


## Como começar
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Rode o projeto em modo desenvolvimento:
   ```sh
   npm run dev

 #### O comando npm create vite@latest cria a estrutura inicial de um projeto Vite, incluindo:
- Criação do package.json com scripts para dev, build e preview.
- Criação da pasta src/ com arquivos App.jsx e main.jsx.
- Criação do index.html na raiz.
- Adição de um README.md com instruções básicas.
- Instalação das dependências principais (React, ReactDOM, Vite).








