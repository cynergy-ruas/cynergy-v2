import { css } from 'styled-components';

const TransitionStyles = css`
    .menu-enter {
        opacity: 0;
        transform: translateX(100%);
    }
    .menu-enter-active {
        opacity: 1;
        transform: translateX(0%);
        transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .menu-enter-active {
        opacity: 1;
    }
    .menu-exit {
        opacity: 1;
        transform: translateX(0%);
    }
    .menu-exit-active {
        opacity: 0;
        transform: translateX(100%);
        transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`;

export default TransitionStyles;
