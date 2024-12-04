import styled from "styled-components";

export const InformationStyled = styled.section`
    max-width: 1280px;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    h2 {
        text-transform: uppercase;
    }

    p {
        font-size: 1.4rem;
        text-transform: uppercase;
        max-width: 70rem;
        width: 100%;
        text-align: center;
    }

    a {
        font-size: 1.4rem;
        text-transform: uppercase;
        padding: 1.2rem 3rem;
        border: 1px solid #1f1f1f;
        text-decoration: none;
        color: #000;
    }
`;