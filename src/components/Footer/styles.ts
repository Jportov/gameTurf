import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { breakpoints, colors } from "../../styles";


export const FooterContainer = styled.footer`

    background-color: ${colors.darkGray};
    padding: 32px 0;
    font-size:14px;
    margin-top: 40px;

    @media (max-width: ${breakpoints.md}) {
        padding: 24px;
        text-align: center;
    }

    @media (max-width: ${breakpoints.sm}) {
        padding: 16px;
        text-align: center;
    }
`

export const FooterTitle = styled.h4`
    color: ${colors.softWhite};
    font-size:16px;
    font-weight:bold;
`


export const LinksFooter = styled.ul`
display:flex;
margin-top:16px;
`

export const FooterLink = styled(HashLink)`
    font-size:14px;
    color: ${colors.easeGray};
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