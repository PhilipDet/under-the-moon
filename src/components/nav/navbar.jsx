import { NavBarStyled, NavList, NavItem, NavLink } from "./navbar.styled.js";

export const NavBar = () => {
    return (
        <NavBarStyled bgcolor="#262626">
            <NavList>
                <NavItem>
                    <NavLink href="#">Hjem</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Koncepter</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Utm Loyalty</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Om</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Kontakt</NavLink>
                </NavItem>
            </NavList>
        </NavBarStyled>
    );
};
