import React from "react";
import { HeaderStyled } from "./header.styled";
import { NavBar } from "../nav/navbar";
import { Banner } from "../banner/banner";

export const Header = () => {
    return (
        <HeaderStyled>
            <NavBar />
            <Banner />
        </HeaderStyled>
    );
};
