import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  darkGray: '#1C1C1E',       // Very dark gray
  deepBlack: '#0A0A0B',      // Deep black
  softWhite: '#F5F5F7',      // Soft white
  vibrantBlue: '#007AFF',    // Bright, vibrant blue (new)
  mediumGray: '#4A4A4E',     // Medium gray for contrast
  easeGray: '#2C2C2E',       // Dark tone for soft background      // Light blue for hover states
  neonGreen: '#2ECC71',      // Neon green for success indicators
  softRed: '#E74C3C',        // Soft red for errors and alerts
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
    background-color: ${colors.deepBlack};
    color: ${colors.softWhite};
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
  }

  @media (max-width: ${breakpoints.md}) {
    .container {
      max-width: 85%;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    .container {
      max-width: 90%;
    }
  }
`

export const Tag = styled.div`

`