import React from 'react';
import styled from 'styled-components';
import { ts40b, colors } from '@design/theme';
import { Line } from '@components';

const HeadingContainer = styled.div`
    display: flex;
    .vertical {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Text = styled.h2`
    ${ts40b}
    writing-mode: ${props => (props.orientation === 'vertical' ? 'vertical-rl' : 'horizontal-lr')};
    padding:20px;
    transform: rotate(-180deg);
    direction: rtl;
`;

const Heading = ({ orientation, children }) => {
    return (
        <HeadingContainer>
            <div className="vertical">
                <Text orientation={orientation}>{children}</Text>
                <Line
                    orientation="vertical"
                    maxLength="100px"
                    style={{
                        stroke: colors.text,
                        strokeWidth: '4px',
                    }}
                />
            </div>
            <div>
                <Line
                    orientation="horizontal"
                    maxLength="100px"
                    style={{
                        stroke: colors.text,
                        strokeWidth: '4px',
                    }}
                />
            </div>
        </HeadingContainer>
    );
};

export default Heading;
