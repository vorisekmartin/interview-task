import styled from "styled-components"
import { sizes, colors } from './variables';



export const Container = styled.div`
    background-color: ${({lightGrey}) => (lightGrey ? `#f7f7f7`  : `#FFFFFF` )};

`

export const Wrapper = styled.div`
    max-width: 1200px; 
    margin: 0 auto; 
`

export const FlexWrapper = styled(Wrapper)`
    display: flex;
`

export const FlexCenteredWrapper = styled(FlexWrapper)`
    align-items: center;
    flex-direction: column;
`


export const Button = styled.button`
    width: 267px;
    height: 60px;
    //margin: 50px 192px 0 191px;
    //padding: 20px 45px 25px 42px;
    border-radius: 7px;
    background-color: ${colors.pink};
    color: #fffffe;
    padding: 20px, 45px, 25px, 42px;
    font-weight: bold;
    font-size: 16px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.35);
    margin: 50px auto 100px auto;
    
    //line-height: 3.94;
    //text-align: left;
   

`