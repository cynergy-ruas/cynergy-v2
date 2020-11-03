import React from 'react';
import styled from 'styled-components';
import { colors, tsm18r, tsm12r } from '@design/theme';
import { media } from '@design/media';

const StyledButton = styled.div`
    ${tsm18r};
    padding: 18px;
    color: ${props => (props.mode === 'light' ? colors.text : colors.main)};
    border: 2px solid ${props => (props.mode === 'light' ? colors.text : colors.main)};
    border-radius: 5px;
    font-weight: bolder;
    ${media.phone`
        ${tsm12r};
        padding: 16px;
        border-width: 1px;
    `};
`;

const Button = ({ text, mode }) => {
    return <StyledButton mode={mode}>{text}</StyledButton>;
};

export default Button;
