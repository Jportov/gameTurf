import styled from 'styled-components';
import { Props } from '.';
import { colors } from '../../styles';


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

`

export const TitleSection = styled.h2`
    font-size: 18px;
    margin-bottom: 40px;
    color: ${colors.softWhite};
    font-weight: bold;
    margin-top: 10px;


`