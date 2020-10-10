import { createGlobalStyle } from 'styled-components';
import { colors, tsm18r } from '@design/theme';
import TransitionStyles from './transitionStyles';

const BaseStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    ${tsm18r}
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.bg};
    color: ${colors.text};

    &.hidden {
      overflow: hidden;
    }
    ${TransitionStyles}
  }

  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote,dl, dt, dd, ul, ol, li,pre,fieldset,legend, button, input, textarea, th, td {
        margin: 0;
        padding: 0;
    };
    ul, ol { 
        list-style: none; 
    }
    a {
        color: ${colors.text};
        text-decoration: none; 
        :hover {
          color: ${colors.main}
        }
    }
    input{
        -webkit-appearance: none;
        border: 0;
        outline: 0;
        background: transparent;
        color: inherit;
    }
    ::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.4;
    }

    ::placeholder {
        color: inherit;
        opacity: 0.4;
    }

`;

export default BaseStyles;
