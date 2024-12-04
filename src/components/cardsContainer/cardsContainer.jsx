import React from "react";
import { CardsContainerStyled } from "./cardsContainer.styled";
import { Card } from "../card/card";
import cardImage1 from "../../img/953d3d5951efaf3ed00703bfdaeb7e3f.jpeg";
import cardImage2 from "../../img/4317f22b83259d2f33bd5a8d02e25fd5.jpeg";

export const CardsContainer = () => {
    return (
        <CardsContainerStyled>
            <Card
                title="One 2 One"
                text="Lorem ipsum dolor sit amet consectetur. Nunc pellentesque
                senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa
                vitae faucibus imperdiet facilisi pulvinar maecenas platea purus
                pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est
                scelerisque."
                btnText="Book tid"
                imageUrl={cardImage1}
            />
            <Card
                title="Loyalty Free"
                text="Lorem ipsum dolor sit amet consectetur. Nunc pellentesque
                senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa
                vitae faucibus imperdiet facilisi pulvinar maecenas platea purus
                pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est
                scelerisque."
                btnText="Læs mere"
                imageUrl={cardImage2}
            />
        </CardsContainerStyled>
    );
};
