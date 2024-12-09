import styled from "styled-components";

export const GalleryStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 3rem 2rem;

    a {
        color: #000;
        font-size: 3.2rem;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;

        &:hover {
            text-decoration: underline;
        }

        @media screen and (max-width: 520px) {
            font-size: 6vw;
        }
    }

    #gallery-container {
        display: grid;
        grid-template-columns: repeat(4, minmax(20rem, 30rem));
        gap: 1.2rem;

        @media screen and (max-width: 890px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media screen and (max-width: 650px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 400px) {
            grid-template-columns: 1fr;
        }
    }
`;
