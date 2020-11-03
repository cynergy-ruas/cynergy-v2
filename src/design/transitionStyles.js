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
    .fadeup-enter {
        opacity: 0.01;
        transform: translateY(20px);
        transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .fadeup-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .fadeup-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .fadedown-enter {
        opacity: 0.01;
        transform: translateY(-20px);
        transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .fadedown-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .fade-enter {
        opacity: 0.01;
        transition: opacity 1000ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .fade-enter-active {
        opacity: 1;
        transition: opacity 1000ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`;

export default TransitionStyles;
