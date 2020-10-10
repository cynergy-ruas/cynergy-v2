import React from 'react';
import styled from 'styled-components';
import { ts18l, ts18r, colors } from '@design/theme';

const StyledQuote = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Text = styled.div`
    ${ts18l}
    font-style: italic;
    text-align: center;
`;
const Author = styled.div`
${ts18r}
color: ${colors.main};
`;

const Quote = props => {
    return (
        <StyledQuote>
            <Text>{props.text}</Text>
            <Author>~ {props.author}</Author>
        </StyledQuote>
    );
};

export default Quote;
