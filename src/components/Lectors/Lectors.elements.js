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
    height: 297px;
    //margin: 49px 20px 20px 0;
    //padding: 34px 72px 36px 65px;
    border-radius: 15px;
    box-shadow: 0px 12px 25px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin-bottom: 20px;
`

export const LectorImgColor = styled.div`
    //border: solid 1px red;
    width: 130px;
    height: 130px;
    //border-radius: 50%;
    //margin: 24px 89px 24px 76px; 
    background-image: linear-gradient(to top, #51e0dd, #51c3e0);
    //padding-bottom: 3px;
    }
`
export const LectorImgContainer = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 50%; 
    overflow: hidden;
    margin-bottom: 24px;
    margin-top: 34px;
    }
`
export const LectorImg = styled.img`
    //border: solid 1px red;
    width: 130px;
    height: 130px; 
    //margin: 0 17px 24px 11px;

 }
`


export const LectorName = styled.h3`
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
export const LectorInfo = styled.p`
    //border: solid 1px red; 
    //width: 158px;
    //height: 38px;
    //margin: 18px 0 0;
    font-family: 'Cabin';
    font-size: 15px;
    font-weight: normal;
    //line-height: 1.47;
    letter-spacing: 0.27px;
    text-align: center;
    color: ${colors.grey} ;
    padding-left: 48px;
    padding-right: 51px;
    margin: 0;
    `