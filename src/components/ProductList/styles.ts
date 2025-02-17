import styled from 'styled-components';
import { Props } from '.';
import { breakpoints, colors } from '../../styles';
import { Card } from '../Produto/styles';

export const ProductListContainer = styled.section<Omit<Props, 'title'>>`
  padding: 32px 0;
  background-color: ${props => props.background === 'black' ? colors.preta : colors.cinza};

  ${Card} {
    background-color: ${props => props.background === 'black' ? colors.cinza : colors.preta};
  }
`;

export const ListProducts = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colunas fixas */
  grid-template-rows: repeat(2, auto); /* 2 linhas automáticas */ 
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 40px;


    @media (max-width: ${breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.sm}) {
        grid-template-columns: 1fr;
    }
`;

export const TitleProductList = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${colors.branca};
  font-weight: bold;
  margin-top: 10px;
`;