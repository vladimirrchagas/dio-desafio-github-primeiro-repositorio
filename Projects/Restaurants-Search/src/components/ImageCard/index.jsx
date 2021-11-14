import LoadingSkeleton from '../Skeleton';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CardCarousel = styled.div`
    display: flex;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${({ photo }) => photo});
    background-size: cover;
    padding: 10px;
    justify-content: center;
`;

const CardRestaurant = styled.div`
    display: block;
    min-width: 100px;
    height: 100px;
    border-radius: 6px;
    background-image: url(${({ photo }) => photo});
    background-size: cover;
    justify-content: center;
    object-fit: cover;
`;

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #fff;
    font-size: 14px;
`;

const ImageCard = ({ restaurant, local }) => {
const [imageLoaded, setImageLoaded] = useState(false);

    const photo = restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon;
    const title = restaurant.name;

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo])

    return (
        <>
        {imageLoaded ? (
            local === "restaurant-card" ? (
                <CardRestaurant photo={photo}/>
            ) : (
                <CardCarousel photo={photo}>
                    <Title>{title}</Title>
                </CardCarousel>
            )
        ) : (
            <LoadingSkeleton width='90px' height='90px' />
        )}
        </>
    );
};

export default ImageCard;