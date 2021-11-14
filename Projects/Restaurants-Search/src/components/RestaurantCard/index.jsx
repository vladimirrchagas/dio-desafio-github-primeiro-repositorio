import React from "react";

import { Restaurant, RestaurantInfo, Title, Address } from "./styles";
import ReactStars from "react-rating-stars-component";

import ImageCard from "../ImageCard";

const RestaurantCard = ({ restaurant, onClick }) => {
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
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <ImageCard key={restaurant.placeId} restaurant={restaurant} local="restaurant-card"/>
        </Restaurant>
    );
};

export default RestaurantCard;