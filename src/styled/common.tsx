import styled from "styled-components"
import { sizes, colors } from './variables';

export const Container = styled.div`
    background-color: ${({lightGrey}) => (lightGrey ? `#f7f7f7`  : `#FFFFFF` )};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    margin: 0 auto;
    max-width: 1220px;
    padding-bottom: 100px;

    @media only screen and (max-width: 450px)  {     
        width: 95%;
        padding-bottom: 40px;
    }
`

export const TitleContainer = styled.div`
    height: 190px;

    @media only screen and (max-width: 718px)  {
        height: 140px;
    }
`

export const Title = styled.div`
    font-size: ${sizes.sizeXXXL};
    font-weight: 900;
    line-height: 1.15;
    font-family: 'Roboto';
    padding-top: 85px; 
    text-align: center;

    @media only screen and (max-width: 718px)  {
        font-size: ${sizes.sizeL};
        padding-top: 65px; 
    }
`

export const Button = styled.button`
    width: 267px;
    height: 60px;
    border-radius: 7px;
    background-color: ${colors.pink};
    color: #fffffe;
    padding: 20px, 45px, 25px, 42px;
    font-weight: bold;
    font-size: 16px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.35);
    margin: 0 auto;
    cursor: pointer;

    :hover{
        transition: all 0.2s ease-in-out;
        background-color: #D13D6B;  
    }
   
`