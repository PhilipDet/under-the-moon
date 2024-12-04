import React from "react";
import { CardsContainerStyled } from "./cardsContainer.styled";
import { Card } from "../card/card";

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
                imageUrl="./src/img/953d3d5951efaf3ed00703bfdaeb7e3f.jpeg"
            />
            <Card
                title="Loyalty Free"
                text="Lorem ipsum dolor sit amet consectetur. Nunc pellentesque
                senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa
                vitae faucibus imperdiet facilisi pulvinar maecenas platea purus
                pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est
                scelerisque."
                btnText="Læs mere"
                imageUrl="./src/img/4317f22b83259d2f33bd5a8d02e25fd5.jpeg"
            />
        </CardsContainerStyled>
    );
};
