import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

type inputGroupProps = {
    maxWidth?: string;
}

type rowProps = {
    marginTop?: string;
}


type tabButtonProps = {
    isActive: boolean;
}

export const Row = styled.div<rowProps>`
    display: flex;
    
    align-items: center;
    column-gap: 24px;
    margin-top: ${(props) => props.marginTop || "0"};
    
    @media (max-width: ${breakpoints.md}) {
        flex-direction: column;
        max-width: 100%;
        align-items: flex-start;
    }
            

`


export const InputGroup = styled.div<inputGroupProps>`
    max-width: ${(props) => props.maxWidth || "auto"};
    flex: auto;
    label {
        
        font-size: 14px;
        margin-bottom: 8px;
        display: block;
        margin-top: 16px;
        
    }

    input, select {
        background-color: ${colors.softWhite};
        height: 32px;
        font-size: 14px;
        padding: 0 8px;
        border: 1px solid ${colors.softWhite};
        border-radius: 4px;
        width: 100%;

        
       &.error {
            border: 1px solid ${colors.softRed};
       } 

        :hover {
            background-color: ${colors.easeGray};
            }
        }



        @media (max-width: ${breakpoints.md}) {

        margin-top: 16px;
}
    }
    
`


export const TabButton = styled.button<tabButtonProps>`
height: 32px;
border-radius: 8px;
font-size: 14px;
font-weight: bold;
color: ${colors.softWhite};
background-color: ${(props) => (props.isActive ? colors.vibrantBlue : colors.deepBlack)};
padding: 0px 8px;
border: none;
cursor: pointer;
margin-right: 16px;


    img {
        width: 16px;
        height: 13px;
        margin-right: 8px;
    }


    @media (max-width: ${breakpoints.md}) {
        font-size: 12px;
        padding: 0px 4px;
        margin-right: 8px;
        margin-bottom: 16px;

    
    }

`

