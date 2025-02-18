import styled from "styled-components";
import { breakpoints, colors } from "../../styles";
import { Price } from "../Banner/styles";
import { ButtonContainer } from "../Button/styles";




export const BannerHero = styled.div`
    position:relative;
    display:flex;
    height: 480px;
    width:100%;

    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    padding-top: 16px; 


    @media (max-width: ${breakpoints.md}) {
            max-width: 100%;
            background-size: cover;
    
    }
    
        &::after {
            position:absolute;
            background-color: ${colors.deepBlack};
            height: 100%;
            width:100%;
            top: 0;
            left:0;
            content: '';    
            opacity: 0.56;
        }

        .container {
        z-index: 1;
        position: relatve;
        display:flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        }
            
`


export const HeroInfos = styled.div`
    padding:16px;
    background-color:${colors.deepBlack};
    max-width:250px;
    border-radius:4px;
    

            ${ButtonContainer} {
                background-color: ${colors.vibrantBlue};
                border: solid 2px ${colors.vibrantBlue};
                       
            }

        h2 {
            font-size:32px;
        }

        ${Price}  {
            font-size:18px;
            margin: 16px 0;
        }


`

export const TagBanner = styled.div`
display: flex;
padding: 16px;
margin-left: 10px;
gap: 8px;

`