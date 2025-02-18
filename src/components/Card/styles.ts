import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.div`
    border-radius: 8px;
    background-color: ${colors.darkGray};
    padding: 24px;
    margin-bottom: 40px;    

    h2, h3 {
        font-size: 18px;
        font-weight: bold;
        color: ${colors.softWhite};
        margin-bottom: 24px;
    }

    .margin-top {
        margin-top: 24px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
    }

    @media (max-width: ${breakpoints.sm}) {
        padding: 16px;
    }
`;