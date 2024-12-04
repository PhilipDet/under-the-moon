import styled from "styled-components";

export const BannerStyled = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    h1 {
        color: #fff;
        margin-top: 25rem;
        text-shadow: 8px 4px 7px #00000040;
        text-align: center;
    }

    div {
        width: 100%;
        padding: 5rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        background-color: #00000080;

        h2 {
            color: #fff;
            text-transform: uppercase;
        }

        p {
            font-size: 1.4rem;
            color: #fff;
            max-width: 430px;
        }
    }
`;
