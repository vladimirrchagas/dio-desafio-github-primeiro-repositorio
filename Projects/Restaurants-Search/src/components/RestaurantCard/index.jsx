import React, { useState } from "react";

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./styles";
import ReactStars from "react-rating-stars-component";

import restaurantImg from '../../assets/restaurante-fake.png'
import Skeleton from "../Skeleton";

const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState (false);

    
    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars
                    count={5}
                    isHalf
                    activeColor="#e7711c"
                    edit={false}
                    value={restaurant.rating}
                />
                <Address>{restaurant.vicinity || restaurant.formated_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto
                imageLoaded={imageLoaded}
                onLoad={() => setImageLoaded(true)}
                src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantImg}
                alt="Foto do restaurante"
            />
            {!imageLoaded && <Skeleton width='100px' height='100px' />}
        </Restaurant>
    );
};

export default RestaurantCard;