import styled from "styled-components";

export const CardsContainerStyled = styled.section`
    max-width: 1280px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    padding: 0 2rem;

    @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`;
