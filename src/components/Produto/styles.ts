import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import { TagContainer } from '../Tag/styles';

export const Card = styled(Link)`
  background-color: ${colors.cinza};
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  justify-content: space-between;
  display: block;
  flex-direction: column;
  position: relative;
  text-decoration: none;
  color: ${colors.branca};

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    font-size: 14px;
    margin-right: 8px;
    display: inline-block;
  }

  &:hover {
    transform: translateY(-4px);
  }
  @media (max-width: ${breakpoints.md}) {

  width: 200px;
  margin: 0 auto;

    img {
      object-fit: cover;
      
    
    }
  }
`;

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 4px;
`;
