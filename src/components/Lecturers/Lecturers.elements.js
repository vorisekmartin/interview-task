import styled from "styled-components"
import { sizes, colors } from '../../styled/variables'

export const TitleContainer = styled.div`
    height: 190px;
`
export const Title = styled.div`
    font-size: ${sizes.sizeXXXL};
    font-weight: 900;
    line-height: 1.15;
    font-family: 'Roboto';
    padding-top: 99px; 
    height: 42px;  
`

export const CardsContainer = styled.div`
    //border: solid 1px red; 
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    flex-wrap: wrap;
    max-width: 1200px;
    
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //border: solid 1px red; 
    width: 285px;
    height: 317px;
    //margin: 49px 20px 20px 0;
    //padding: 34px 72px 36px 65px;
    border-radius: 15px;
    box-shadow: 0px 12px 25px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin-bottom: 20px;
    position: relative;
`

export const LecturerImgColor = styled.div`
    //border: solid 1px red;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    //margin: 24px 89px 24px 76px; 
    background-image: linear-gradient(to top, #51e0dd, #51c3e0);
    //padding-bottom: 3px;
    position: absolute;
    z-index:1;
    top: 38px;
    left: 80px;
    }
`
export const LecturerImgContainer = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 50%; 
    overflow: hidden;
    margin-bottom: 24px;
    margin-top: 34px;
    z-index:2;
    //margin-left: 76px;
    
    //padding-right: 86px;
    //padding-left: 79px;
    
`
export const LecturerImg = styled.img`
    //border: solid 1px red;
    width: 135px;
    height: 135px; 
    //margin: 0 17px 24px 11px;
   
    //padding-left: 76px;

 }
`


export const LecturerName = styled.h3`
    //border: solid 1px red;
    //width: 135px;
    //height: 17px;
  //margin: 20px 11px 18px 12px;
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 900;
    //line-height: 2.86;
    //padding-left: 48px;
    //padding-right: 51px;
    text-align: center;
    margin-bottom: 14px;
    margin-top: 0px;
`
export const LecturerInfo = styled.p`
    //border: solid 1px red; 
    //width: 158px;
    //height: 38px;
    //margin: 18px 0 0;
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