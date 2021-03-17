import {createGlobalStyle} from 'styled-components';
import { sizes, colors } from './variables';


const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: ${sizes.sizeXS};
    color: ${colors.black};
    outline: none;
    border: none;
}
`;

export default GlobalStyle;