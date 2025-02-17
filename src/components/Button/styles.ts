import { Link } from 'react-router-dom';
import styled from "styled-components";
import { colors } from "../../styles";


export const ButtonContainer = styled.button`
    background-color:transparent;
    color: ${colors.branca};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
    border: solid 2px ${colors.branca};

    &:hover {
        background-color: ${colors.cinza};
    }
`


export const ButtonLink = styled(Link)`

    background-color:transparent;
    color: ${colors.branca};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
    border: solid 2px ${colors.branca};
    text-decoration: none;
    

    &:hover {
        background-color: ${colors.cinza};
    }
`    

export const BtnComprar = styled.button`
  margin-top: auto; /* Empurra o botão para o final */
  width: 100%;
  background-image: linear-gradient(45deg, ${colors.preta}, ${colors.azulMarinho});
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: ${colors.branca};
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-image: linear-gradient(-65deg, ${colors.azulMarinho}, ${colors.azulMarinho});
  }
    .btn-container {
    display: flex;
    justify-content: center;
    margin-top: auto; /* Empurra o botão para o final */
  }
`;
