import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Image {
    url: string;
    alt: string;
}

const images: Image[] = [
    { url: '/images/slide1.jpg', alt: 'Slide 1' },
    { url: '/images/slide2.jpg', alt: 'Slide 2' },
];

const ImageSlider: React.FC = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
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

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image.url} alt={image.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider; 