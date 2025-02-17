import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  cinza: '#1C1C1E',       // Cinza bem escuro
  preta: '#0A0A0B',       // Preto profundo
  branca: '#F5F5F7',      // Branco suave
  azulMarinho: '#0A3D62', // Azul-marinho sofisticado
  cinzaClaro: '#4A4A4E',  // Cinza médio para contraste
  easeGrey: '#2C2C2E'     // Tom escuro para fundo suave
};


export const breakpoints = {
  sm: '576px',
  md: '764px',
  lg: '1024px',
  

}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: "Roboto", serif;
  }

  body {
    background-color: ${colors.preta};
    color: ${colors.branca};
    padding-top: 80px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
    @media (max-width: ${breakpoints.lg}) {
    .container {
      max-width: 80%;
    }

`

export const Tag = styled.div`

`