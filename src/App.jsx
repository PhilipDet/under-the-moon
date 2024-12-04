import React from "react";
import "./app.scss";
import { Header } from "./components/header/header";
import { Information } from "./components/information/information";
import { CardsContainer } from "./components/cardsContainer/cardsContainer";

export const App = () => {
    return (
        <>
            <Header />
            <Information />
            <CardsContainer />
        </>
    );
};
