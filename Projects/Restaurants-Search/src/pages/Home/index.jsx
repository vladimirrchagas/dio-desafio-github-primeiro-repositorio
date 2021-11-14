import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field/dist/index';
import { MdSearch } from "react-icons/md";
import { Container, Search, Logo, Wraper, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styles';
import { ImageCard, RestaurantCard, Modal, MapContainer, Loader, LoadingSkeleton } from '../../components'

import logo from '../../assets/logo.svg';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('')
    const [placeId, setPlaceId] = useState(null)
    const [modalOpened, setModalOpened] = useState(false);

    const { restaurants, restaurantSelected }  = useSelector(({ restaurants }) => restaurants);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };
      
    const renderCarousel = () => {
        return (
            <>
                <CarouselTitle>Na sua Área</CarouselTitle>
                <Carousel {...settings}>
                    {restaurants.map((restaurant) => (
                        <ImageCard key={restaurant.place_id} restaurant={restaurant} />
                    ))}
                </Carousel>
            </>
        );
    };

    const renderRestaurants = () => {
        return restaurants.map((restaurant) => (
        <RestaurantCard
            key={restaurant.place_id}
            restaurant={restaurant}
            onClick={() => {
                setPlaceId(restaurant.place_id);
                setModalOpened(true);
            }}
        />
        ));
    };
    
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') { 
            setQuery(inputValue);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <Wraper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do Pesquisador de Restaurantes" width="50%"/>
                    <TextField
                        label='Find Your Restaurant'
                        outlined
                        trailingIcon={<MdSearch size='20px' color='#6200ee'/>}
                    >
                        <Input
                            value={inputValue}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            type="text"
                        />
                    </TextField>
                    {restaurants.length > 0 ? renderCarousel() : <Loader />}
                </Search>
                {renderRestaurants()}
                <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                    {restaurantSelected ? (
                        <>
                            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                            <ModalContent>
                                {
                                restaurantSelected?.opening_hours?.isOpen()
                                    ? 'Aberto Agora :-)'
                                    : 'Fechado Neste Momento :-('
                                }
                            </ModalContent>
                        </>
                    ) : (
                        <>
                            <LoadingSkeleton width='10px' height='10px'/>
                            <LoadingSkeleton width='10px' height='10px'/>
                            <LoadingSkeleton width='10px' height='10px'/>
                            <LoadingSkeleton width='10px' height='10px'/>
                        </>
                    )}
                </Modal>
            </Container>
            <MapContainer query={query} placeId={placeId}/>
        </Wraper>
    )
}

export default Home;