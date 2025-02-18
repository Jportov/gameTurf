# GameTurf

## Visão Geral

O GameTurf é uma plataforma inovadora projetada para fornecer uma experiência de jogo imersiva e interativa. Este projeto combina várias tecnologias modernas para criar um ambiente de jogo robusto e escalável. O objetivo do GameTurf é oferecer uma interface de usuário intuitiva, desempenho otimizado e uma arquitetura flexível que permita fácil manutenção e expansão.

## Funcionalidades

- **Página Inicial**: Exibe os jogos em destaque e em promoção.
- **Categorias**: Lista jogos por categorias como Ação, Luta, Esportes, Simulação e RPG.
- **Detalhes do Produto**: Exibe informações detalhadas sobre cada jogo, incluindo descrição, desenvolvedor, editora e idiomas suportados.
- **Carrinho de Compras**: Permite adicionar e remover jogos do carrinho, visualizar o total e prosseguir para o checkout.
- **Checkout**: Formulário para finalizar a compra com opções de pagamento por cartão de crédito ou boleto bancário.
- **Galeria**: Exibe imagens e vídeos dos jogos em uma galeria interativa.

## Tecnologias Utilizadas

### Frontend

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Redux**: Gerenciamento de estado previsível para aplicativos JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Styled-Components**: Biblioteca para estilização de componentes em React utilizando tagged template literals.
- **Formik**: Biblioteca para construção de formulários em React.
- **Yup**: Biblioteca para validação de formulários.
- **React Router**: Biblioteca para roteamento em aplicações React.

### Backend

- **Fake API**: Utilização de uma API fake para simulação de dados.

### Testes

- **Jest**: Framework de testes em JavaScript, utilizado para testes unitários e de integração.
- **Testing Library**: Conjunto de utilitários para teste de componentes React.

## Dependências

### Dependências de Produção

- `@reduxjs/toolkit`: ^2.5.1
- `@testing-library/user-event`: ^14.4.3
- `@types/react`: ^18.2.64
- `@types/react-dom`: ^18.2.18
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-redux`: ^9.2.0
- `react-router-dom`: ^7.1.5
- `react-router-hash-link`: ^2.4.3
- `react-scripts`: ^5.0.1
- `styled-components`: ^5.3.6
- `web-vitals`: ^2.1.4

### Dependências de Desenvolvimento

- `@babel/core`: ^7.26.8
- `@babel/preset-env`: ^7.26.8
- `@babel/preset-react`: ^7.26.3
- `@babel/preset-typescript`: ^7.26.0
- `@babel/register`: ^7.25.9
- `@testing-library/jest-dom`: ^6.6.3
- `@testing-library/react`: ^16.2.0
- `@types/react-input-mask`: ^3.0.6
- `@types/react-router-hash-link`: ^2.4.9
- `@types/styled-components`: ^5.1.26
- `@typescript-eslint/eslint-plugin`: ^5.62.0
- `eslint`: ^8.33.0
- `eslint-config-prettier`: ^8.6.0
- `eslint-plugin-prettier`: ^4.2.1
- `eslint-plugin-react`: ^7.32.2
- `eslint-plugin-react-hooks`: ^4.6.0
- `formik`: ^2.4.6
- `json-server`: ^1.0.0-beta.3
- `msw`: ^2.7.0
- `react-input-mask`: ^2.0.4
- `react-spinners`: ^0.15.0
- `ts-node`: ^10.9.2
- `tsconfig-paths`: ^4.2.0
- `typescript`: 4.9.5
- `yup`: ^1.6.1

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
/gameturf
├── /src
│   ├── /components
│   ├── /pages
│   ├── /services
│   ├── /store
│   ├── /styles
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── /public
│   ├── index.html
│   ├── manifest.json
│   └── ...
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
├── README.md
└── ...
```

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- npm ou yarn

### Passos para Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/gameturf.git
   cd gameturf
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto:

   ```bash
   npm start
   ```

4. Acesse a aplicação em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
