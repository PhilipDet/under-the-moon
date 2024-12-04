import styled from "styled-components";

export const NavBarStyled = styled.nav`
  width: 100%;
  padding: 2rem;
  background-color: ${(props) => props.bgcolor || "#333"};
`;

export const NavList = styled.ul`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: right;
  list-style: none;
  gap: 1.5rem;
`;

export const NavItem = styled.li`
  list-style-type: none;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-size: 1.6rem;

  &:hover {
    text-decoration: underline;
  }
`;
