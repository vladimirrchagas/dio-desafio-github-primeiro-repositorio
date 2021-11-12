import Skeleton from '../Skeleton';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    padding: 10px;
    justify-content: center;
`;

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #fff;
    font-size: 16px;
`;

const ImageCard = ({ photo, title }) => {
const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo])

    return (
        <>
        {imageLoaded ? (
            <Card photo={photo}>
                <Title>{title}</Title>
            </Card>
        ) : (
            <Skeleton width='90px' height='90px' />
        )}
        </>
    );
};

export default ImageCard;