import React from "react";
import { BannerStyled } from "./banner.styled";

export const Banner = () => {
    return (
        <BannerStyled>
            <img src="./src/img/headerImage.jpg" />
            <h1>Under the Moon</h1>
            <div>
                <h2>Hairstylist og frisør</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Laoreet in
                    vestibulum id in. At aliquam sed nibh elementum. Gravida et
                    tellus quam nibh diam blandit a odio semper. Eu congue eget
                    dolor commodo pellentesque et ac orci. Accumsan rhoncus sed
                    fermentum malesuada. Eu risus integer consequat egestas diam
                    suspendisse consequat mattis.
                </p>
            </div>
        </BannerStyled>
    );
};
