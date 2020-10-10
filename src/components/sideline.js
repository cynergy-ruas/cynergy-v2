import React from 'react';
import styled from 'styled-components';
import { Line } from '@components';
import { colors } from '@design/theme';
import { media } from '@design/media';

const SideLineContainer = styled.div`
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: ${props => (props.position === 'left' ? '40px' : 'auto')};
    right: ${props => (props.position === 'right' ? '40px' : 'auto')};
    display: flex;
    flex-direction: column;
    align-items: center;
    ${media.bigDesktop`
        display: none;
    `};
`;

const SideLine = ({ children, position }) => {
    return (
        <SideLineContainer position={position}>
            {children}
            <Line
                orientation="vertical"
                maxLength="100px"
                style={{
                    stroke: colors.text,
                    strokeWidth: '4px',
                }}
            />
        </SideLineContainer>
    );
};

export default SideLine;
