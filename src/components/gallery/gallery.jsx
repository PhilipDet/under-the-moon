import React from "react";
import { GalleryStyled } from "./gallery.styled";
import { GalleryImage } from "../galleryImage/galleryImage";
import { galleryImages } from "./galleryImages";

export const Gallery = () => {
    return (
        <GalleryStyled>
            <a href="#">Follow Us On Instagram</a>
            <div id="gallery-container">
                {galleryImages.map((image, index) => (
                    <GalleryImage key={index} imageUrl={image} />
                ))}
            </div>
        </GalleryStyled>
    );
};
