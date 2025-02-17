import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { colors } from "../../styles";


export const FooterContainer = styled.footer`

    background-color: ${colors.cinza};
    padding: 32px 0;
    font-size:14px;
    margin-top: 40px;
`

export const TituloFooter = styled.h4`
    color: ${colors.branca};
    font-size:16px;
    font-weight:bold;
`


export const LinksFooter = styled.ul`
display:flex;
margin-top:16px;
`

export const FooterLink = styled(HashLink)`
    font-size:14px;
    color: ${colors.cinzaClaro};
    text-decoration: none;
    margin-right:8px;
    cursor:pointer;
    
`

export const FooterSection = styled.div`
    margin-bottom: 64px ;
`

export const CopyFooter = styled.p`
    font-weight:bold;


`