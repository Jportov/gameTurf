import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';



export const Logo = styled.h1`
  color: ${colors.azulMarinho};
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  
    @media(max-width: ${breakpoints.md}) {
    
      margin-left: 0;
      display: block;

    }
  `




export const HeaderBar = styled.header`
  background-color: ${colors.cinza};
  padding:24px;
  border-radius: 16px;
  margin-bottom: 80px;


      a{ 
      color: ${colors.branca};
      text-decoration: none;
      font-weight: bold;
    }

      @media (max-width: ${breakpoints.sm}) { 
        
        flex-direction: column;
        align-items: flex-start;
      }

  
`

export const HeaderRow = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

    > div {
      display: flex;
      align-items: center;

      
      @media(max-width: ${breakpoints.md}) { 
        flex: 1;
        justify-content: space-between;
        
        ${Links} {        
            display: none;
          }
        }
      }
`

export const NavMenu = styled.nav`
  
  display: none;

  &.is-open {

  display: block;

  }

`


export const LinkItem = styled.li`
  margin-right: 16px;

  @media(max-width: ${breakpoints.md}) {
      margin-right: 0;
      a{
          display: block;
          text-align: center;
          padding: 16px 0;
      
      }
  }
  `


  export const MenuHamburguer = styled.div`
    cursor: pointer;
    width: 32px;
    span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${colors.branca};
      margin: 4px 0;
      transition: all 0.3s ease-out;
  
      
        @media (min-width: ${breakpoints.md}) { 
          display: none;
        }
    }
  
  `


export const CartButton = styled.a`
  position: relative;  
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 16px;
  cursor: pointer;  
  width: auto;  
  
  

  &:hover {
    opacity: 0.8; 
  }

    

  @media(max-width: ${breakpoints.md}) { 
    img { 
      margin-left: 0; 
    }
  }
`;

export const SpanNotification = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;  /* Ajusta a posição para que o contador fique no canto superior direito do ícone */
  right: -5px; /* Ajusta a posição para que o contador não fique fora do ícone */
  transform: translate(50%, -50%);  /* Correção fina do posicionamento */
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${colors.azulMarinho};
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: -5 -5px;
  animation: 0.3s ease-in-out 0s 1 normal forwards running hUaSCH;
  
  
`;

