import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        'https://i.pinimg.com/originals/28/96/e0/2896e070b106101bc332ae76f76782f3.jpg',
        'https://img.freepik.com/fotos-gratis/carro-luxuoso-estacionado-na-estrada-com-um-farol-iluminado-ao-por-do-sol_181624-60607.jpg',
        'https://www.10wallpaper.com/wallpaper/medium/1806/2018_Lamborghini_Aventador_S_Roadster_Blue_Series_medium.jpg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            className='mb-4'
        >
            <div
                style={{
                    backgroundColor: 'black',
                    flex: '1 1',
                    height: '60vh'
                }}
            />
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Imagem ${index + 1}`}
                    style={{
                        display: index === currentImageIndex ? 'block' : 'none',
                        width: '70%',
                        height: '60vh'
                    }}
                />
            ))}
            <div
                style={{
                    backgroundColor: 'black',
                    flex: '1 1',
                    height: '60vh'
                }}
            />
        </div>
    );
};

export default Carousel;