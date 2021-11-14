import styled from 'styled-components';
import Slider from 'react-slick';

export const Wraper = styled.div`
    display: flex;
    flex-direction: row;
    *::-webkit-scrollbar {
        width: 5px;
        cursor: pointer;
    }
    
    *::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 20px;
       
    }
`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 550px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: #fff;
    padding: 16px;
    margin-bottom: 5px;
`;

export const Logo = styled.img`
    align-self: center;
    margin-bottom: 15px;
`;

export const Map = styled.div`
    background-color: green;
    width: 500px;
`;

export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 5px;
    }
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 10px 0;
`;

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    text-transform: none;
    line-height: 29px;
    font-size: 24px;
    font-weight: bold;
`;

export const ModalContent = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    line-height: 19px;
    font-size: 16px;
    font-weight: normal;
`;