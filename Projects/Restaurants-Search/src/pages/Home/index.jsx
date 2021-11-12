import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field/dist/index';
import MaterialIcon from '@material/react-material-icon/dist/index';
import { Container, Search, Logo, Wraper, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styles';
import { Card, RestaurantCard, Modal, MapContainer, Loader, Skeleton } from '../../components'

import logo from '../../assets/logo.svg';
import restaurantImg from '../../assets/restaurante-fake.png'

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null)
    const [placeId, setPlaceId] = useState(null)
    const [modalOpened, setModalOpened] = useState(false);

    const { restaurants, restaurantSelected }  = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleKeyPress(e) {
        console.log(e)
        if(e.key === 'Enter') {
            setQuery(inputValue);
        }
    };

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }

    return (
        <Wraper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do Pesquisador de Restaurantes" width="50%"/>
                    <TextField
                        label='Find Your Restaurant'
                        outlined
                        onTrailingIconSelect={() => this.setState({value: ''})}
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </TextField>
                    {restaurants.length > 0 ? (
                        <>
                            <CarouselTitle>
                                Na sua Área
                            </CarouselTitle>
                            <Carousel {...settings}>
                                { restaurants
                                    .map((restaurant) => 
                                        <Card
                                            key={restaurant.place_id}
                                            photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantImg}
                                            title={restaurant.name}
                                        />)
                                }
                            </Carousel>
                        </>
                    ) : ( <Loader /> )}
                </Search>
                {restaurants
                    .map((restaurant) => 
                        <RestaurantCard 
                            key={restaurant.place_id}
                            restaurant={restaurant}
                            onClick={() => handleOpenModal(restaurant.place_id)}
                        />)}
            </Container>
            <MapContainer query={query} placeId={placeId}/>
            
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                        <ModalContent>
                            {restaurantSelected?.opening_hours?.open_now
                                ? 'Aberto Agora :-)'
                                : 'Fechado Neste Momento :-('}
                        </ModalContent>
                    </>
                ) : (
                    <>
                        <Skeleton width='10px' height='10px'/>
                        <Skeleton width='10px' height='10px'/>
                        <Skeleton width='10px' height='10px'/>
                        <Skeleton width='10px' height='10px'/>
                    </>
                )}
            </Modal>
        </Wraper>
    )
}

export default Home;