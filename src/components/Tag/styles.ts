import styled from "styled-components";
import { Props } from ".";
import { colors } from "../../styles";




export const TagContainer = styled.div<Props>`
    background-color: ${colors.vibrantBlue};
    color: ${colors.softWhite};
    font-size: ${(props) => (props.size === 'big' ? '16px' : '10px' )};
    font-weight: bold;
    padding: ${(props) => (props.size === 'big' ?  '8px' : '4px 6px') };
    border-radius: 8px;
    display: flex;
    white-space:nowrap;

`