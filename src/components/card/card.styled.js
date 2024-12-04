import styled from "styled-components";

export const CardStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    color: #fff;
    text-align: center;
    height: 33rem;

    h3 {
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.5rem;
        max-width: 37rem;
    }

    a {
        font-size: 1.4rem;
        text-transform: uppercase;
        padding: 1.2rem 3rem;
        background-color: #1f1f1f;
        border: 1px solid #fff;
        text-decoration: none;
        color: #fff;
    }

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
`;
