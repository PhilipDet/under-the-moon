import React from "react";
import "./app.scss";
import { Header } from "./components/header/header";
import { Information } from "./components/information/information";
import { CardsContainer } from "./components/cardsContainer/cardsContainer";
import { Gallery } from "./components/gallery/gallery";
import { Footer } from "./components/footer/footer";

export const App = () => {
    return (
        <>
            <Header />
            <Information />
            <CardsContainer />
            <Gallery />
            <Footer />
        </>
    );
};
