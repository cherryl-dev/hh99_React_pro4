import { createGlobalStyle } from 'styled-components';
import kkmBlod from '../fonts/kkm-blod.ttf';
import kkmLight from '../fonts/kkm-light.ttf';

const GlobalStyle = createGlobalStyle`
    /* 타이틀용 굵은 폰트 */
    @font-face {
        font-family: 'kkBold';
        src: local('kkmBlod');
        font-style: normal;
        src: url(${kkmBlod}) format('truetype');
    }

    /* 본문용 얇은 폰트 */
    @font-face {
        font-family: 'kkLight';
        src: local('kkmLight');
        font-style: normal;
        src: url(${kkmLight}) format('truetype');
    }
`;

export default GlobalStyle;