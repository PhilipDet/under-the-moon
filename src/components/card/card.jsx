import React from "react";
import { CardStyled } from "./card.styled";

export const Card = ({ title, text, btnText, imageUrl }) => {
    return (
        <CardStyled>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#">{btnText}</a>
            <img src={imageUrl} />
        </CardStyled>
    );
};
