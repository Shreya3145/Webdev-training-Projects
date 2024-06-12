import React from 'react';
import './Gallery.css'; 
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.jpeg';
import image4 from '../../assets/image4.jpeg';
import image5 from '../../assets/image5.jpeg';
import image6 from '../../assets/image6.jpeg';
import image7 from '../../assets/image7.jpeg';
import image8 from '../../assets/image8.jpeg';
import image9 from '../../assets/image9.jpeg';
import image10 from '../../assets/image10.jpeg';

export default function Gallery() {
    return (
        <div className="gallery-container">
            <h2>Gallery</h2>
            <div className="image-gallery">
                <img src={image1} alt="Pancakes" />
                <img src={image2} alt="Pasta" />
                <img src={image3} alt="Spaghetti" />
                <img src={image4} alt="Chola-batura" />
                <img src={image5} alt="Burger" />
                <img src={image6} alt="Pizza" />
                <img src={image7} alt="Rotisserie Chicken" />
                <img src={image8} alt="Bao" />
                <img src={image9} alt="Macroons" />
                <img src={image10} alt="Salad" />
            </div>
        </div>
    );
}
