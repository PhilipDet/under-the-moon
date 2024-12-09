import { NavBarStyled } from "./NavBar.styled.js";

export const NavBar = () => {
    return (
        <NavBarStyled>
            <ul>
                <li>
                    <a href="#">Hjem</a>
                </li>
                <li>
                    <a href="#">Koncepter</a>
                </li>
                <li>
                    <a href="#">Utm Loyalty</a>
                </li>
                <li>
                    <a href="#">Om</a>
                </li>
                <li>
                    <a href="#">Kontakt</a>
                </li>
            </ul>
        </NavBarStyled>
    );
};
