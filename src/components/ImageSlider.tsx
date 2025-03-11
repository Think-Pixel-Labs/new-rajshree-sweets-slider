import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Image {
    url: string;
    alt: string;
}

// Import images directly
const images: Image[] = [
    { url: './images/slide1.webp', alt: 'Slide 1' },
    { url: './images/slide2.webp', alt: 'Slide 2' }
];

const ImageSlider: React.FC = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        vertical: true,
        verticalSwiping: false,
        fade: false,
        cssEase: 'ease',
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        adaptiveHeight: false,
        centerMode: false,
        variableWidth: false
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        console.error('Image failed to load:', e.currentTarget.src);
        // You can set a fallback image here if needed
        // e.currentTarget.src = '/fallback-image.jpg';
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img 
                            src={image.url} 
                            alt={image.alt} 
                            onError={handleImageError}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider; 