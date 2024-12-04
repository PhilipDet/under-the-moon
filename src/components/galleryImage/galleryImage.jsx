import React from "react";
import { GalleryImageStyled } from "./galleryImage.styled";

export const GalleryImage = ({ imageUrl }) => {
    return (
        <GalleryImageStyled>
            <img src={imageUrl} />
        </GalleryImageStyled>
    );
};
