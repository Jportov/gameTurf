import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Props } from '.';
import { colors } from "../../styles";

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === "primary" ? colors.vibrantBlue : "transparent"};
  border: 2px solid
    ${(props) => (props.variant === "primary" ? colors.vibrantBlue : colors.softWhite)};
  color: ${colors.softWhite};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`;


export const ButtonLink = styled(Link)`

    background-color:transparent;
    color: ${colors.softWhite};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
    border: solid 2px ${colors.softWhite};
    text-decoration: none;
    

    &:hover {
        background-color: ${colors.darkGray};
    }
`    


