import styled, { css } from 'styled-components';
import { media } from '@design/media';

const textStyleMixin = (size, family, letterSpacing, lineHeight) => {
    return css`
        font-size: ${size}px;
        font-family: ${family};
        letter-spacing: ${letterSpacing}px;
        line-height: ${lineHeight}px;
    `;
};

//Text styles
export const tsd40d = textStyleMixin(40, 'devil-breeze', 0.4, 40);
export const tsd36d = textStyleMixin(36, 'devil-breeze', 0.36, 36);
export const tsd80d = textStyleMixin(80, 'devil-breeze', 0.8, 80);
export const ts250b = textStyleMixin(250, 'product-sans-bold', 0, 215);
export const ts100b = textStyleMixin(100, 'product-sans-bold', 0, 107);
export const ts80r = textStyleMixin(80, 'product-sans-regular', 0.5, 97);
export const ts50r = textStyleMixin(50, 'product-sans-regular', 0.5, 61);
export const ts40r = textStyleMixin(40, 'product-sans-regular', 0.4, 48);
export const ts36r = textStyleMixin(36, 'product-sans-regular', 0.6, 36);
export const ts20r = textStyleMixin(20, 'product-sans-regular', 0.2, 24);
export const ts20b = textStyleMixin(20, 'product-sans-bold', 0.2, 24);
export const ts50b = textStyleMixin(50, 'product-sans-bold', 1.56, 61);
export const ts40b = textStyleMixin(40, 'product-sans-bold', 0.67, 49);
export const ts60b = textStyleMixin(60, 'product-sans-bold', 1.875, 50);
export const ts36b = textStyleMixin(36, 'product-sans-bold', 0.6, 36);
export const ts30b = textStyleMixin(30, 'product-sans-bold', 0.6, 36);
export const ts30l = textStyleMixin(30, 'product-sans-light', 0.6, 36);
export const ts26b = textStyleMixin(26, 'product-sans-bold', 0.6, 34);

export const tsm24r = textStyleMixin(24, 'pt-mono-regular', 0.67, 28);
export const ts24b = textStyleMixin(24, 'product-sans-bold', 0.6, 28);
export const ts24l = textStyleMixin(24, 'product-sans-light', 0.6, 28);
export const ts29l = textStyleMixin(29, 'product-sans-light', 0.342, 34);

export const ts22b = textStyleMixin(22, 'product-sans-bold', 0.6, 26);

export const ts32m = textStyleMixin(32, 'product-sans-medium', 0.32, 32);
export const ts22m = textStyleMixin(22, 'product-sans-medium', 0.24, 21);
export const ts20l = textStyleMixin(20, 'product-sans-light', 0.5, 26);
export const ts18l = textStyleMixin(18, 'product-sans-light', 0.1, 20);

export const ts18b = textStyleMixin(18, 'product-sans-bold', 0.5, 26);
export const tsm18r = textStyleMixin(18, 'pt-mono-regular', 0.5, 26);
export const tsm16r = textStyleMixin(16, 'pt-mono-regular', 0.4, 21);
export const tsm12r = textStyleMixin(12, 'pt-mono-regular', 0.39, 13);
export const ts18r = textStyleMixin(18, 'product-sans-regular', 0.18, 22);
export const ts16r = textStyleMixin(16, 'product-sans-regular', 0.1, 20);
export const ts29r = textStyleMixin(29, 'product-sans-regular', 0.34, 35);
export const ts10r = textStyleMixin(10, 'product-sans-regular', 0.12, 13);
export const ts14r = textStyleMixin(14, 'product-sans-regular', 0.14, 14);
export const ts40m = textStyleMixin(40, 'product-sans-medium', 0.4, 40);
//Button Styles
export const tsBtn = textStyleMixin(15, 'product-sans-light', 0.5, 20);
export const tsBtnSmall = textStyleMixin(12, 'product-sans-light', 0.4, 20);

export const colors = {
    main: '#9d1d59',
    main50alpha: '#9d1d5980',
    text: '#FFFFFF',
    bg: '#191919',
};

export const Section = styled.section`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1000px;
    position: relative;
    ${media.desktop`padding: 100px 20px;`};
`;

export const Main = styled.div`
    /* top: ${props => (props.containsHeading ? '20%' : '0%')};
    left: ${props => (props.containsHeading ? '6%' : '0%')}; */
    position: relative;
    .header{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .content{
        /* position: absolute; */
       position: relative;
       ${props =>
           props.containsHeading
               ? css`
                     margin-top: ${props => (props.orientation === 'horizontal' ? '8%' : '4%')};
                     margin-left: ${props => (props.orientation === 'horizontal' ? '4%' : '8%')};
                     ${media.thone`
            margin-top: 16%;
            margin-left: 0%;
        `};
                     ${media.tablet`
            margin-top: 16%;
            margin-left: 0%;
        `};
                 `
               : css``}
    }
`;
