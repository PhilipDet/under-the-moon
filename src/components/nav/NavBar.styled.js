import styled from "styled-components";

export const NavBarStyled = styled.nav`
    width: 100%;
    padding: 2rem;
    background-color: #262626;

    ul {
        max-width: 1680px;
        display: flex;
        justify-content: right;
        list-style: none;
        gap: 1.5rem;

        li {
            list-style-type: none;

            a {
                text-decoration: none;
                color: white;
                font-weight: 400;
                font-size: 1.6rem;
                text-transform: uppercase;
                position: relative;

                &::after {
                    content: "";
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 1px;
                    background: white;
                    transition: width 0.3s;
                }

                &:hover::after {
                    width: 100%;
                }
            }
        }
    }
`;
