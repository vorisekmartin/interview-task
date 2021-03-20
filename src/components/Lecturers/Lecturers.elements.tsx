import styled from "styled-components"
import { sizes, colors } from '../../styled/variables'

export interface lecturerData {
    id: number;
    image: string;
    name: string;
    title: string;
}


export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto 50px auto;
    flex-wrap: wrap;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 285px;
    height: 317px;
    border-radius: 15px;
    box-shadow: 0px 12px 25px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin-bottom: 20px;
    position: relative;
    margin-left: 10px;
    margin-right: 10px;

   :hover .hoverLecturer { 
        transition: all 0.2s ease-in-out;
        background-image: linear-gradient(to top,  #D13D6B,  #D13D6B); 
    }
`

export const LecturerImgColor = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 50%; 
    background-image: linear-gradient(to top, #51e0dd, #51c3e0);
    position: absolute;
    z-index:1;
    top: 38px;
    left: 80px;
  
`
export const LecturerImgContainer = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 50%; 
    overflow: hidden;
    margin-bottom: 24px;
    margin-top: 34px;
    z-index:2;
    
`
export const LecturerImg = styled.img`
    width: 135px;
    height: 135px; 
 }
`

export const LecturerName = styled.h3`
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 14px;
    margin-top: 0px;
`

export const LecturerInfo = styled.p`
    font-family: 'Cabin', sans-serif;
    font-size: 15px;
    font-weight: normal;
    letter-spacing: 0.27px;
    text-align: center;
    color: ${colors.grey} ;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0;
    line-height: 22px;
    
    :first-letter {
        text-transform: uppercase;
}
`