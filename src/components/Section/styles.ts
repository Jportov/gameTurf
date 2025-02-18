import styled from 'styled-components';
import { Props } from '.';
import { breakpoints, colors } from '../../styles';


export const SectionContainer = styled.section<Omit<Props, 'title'>>`
    padding: 32px 0;
    background-color: ${props => props.background === 'black' ? colors.deepBlack : colors.darkGray};
    overflow: auto;

    p {
        font-size: 14px;
        font-weight: 300;
        line-height: 22px;
        max-width: 640px;
    }

    @media (max-width: ${breakpoints.md}) {
        padding: 24px 0;
        text-align: center;
    }

    @media (max-width: ${breakpoints.sm}) {
        padding: 16px 0;
        text-align: center;
    }
`

export const TitleSection = styled.h2`
    font-size: 18px;
    margin-bottom: 40px;
    color: ${colors.softWhite};
    font-weight: bold;
    margin-top: 10px;


`