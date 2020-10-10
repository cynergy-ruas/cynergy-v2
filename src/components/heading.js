import React from 'react';
import styled from 'styled-components';
import { ts60b, colors } from '@design/theme';
import { Line } from '@components';
import { media } from '@design/media';
import { ts30b } from '../design/theme';

const HeadingContainer = styled.div`
    display: flex;
    flex-direction: ${props => (props.orientation === 'vertical' ? 'row' : 'column')};

    .vertical {
        display: flex;
        flex-direction: ${props => (props.orientation === 'vertical' ? 'column' : 'row')};
        align-items: center;
        ${media.thone`

        `};
    }
    .line {
        ${media.thone`
            display: none;
        `};

        ${media.tablet`
            display: none;
        `};
    }
`;

const Text = styled.h2`
    ${ts60b}
    writing-mode: ${props => (props.orientation === 'vertical' ? 'vertical-rl' : 'horizontal-lr')};
    transform: ${props => (props.orientation === 'vertical' ? 'rotate(-180deg)' : '')};
    direction: rtl;
    padding: ${props => (props.orientation === 'vertical' ? '20px 0px 0px 20px' : '0px 20px 20px 0px')};
    ${media.thone`
        ${ts30b}
        writing-mode: horizontal-tb;
        transform: none;
        padding: 0px;

    `};
    ${media.tablet`
        writing-mode: horizontal-tb;
        transform: none;
        padding: 0px;

    `};
`;

const Heading = ({ orientation, children, lineHeightRight, lineHeightLeft }) => {
    return (
        <HeadingContainer orientation={orientation}>
            <div className="vertical">
                <Text orientation={orientation}>{children}</Text>
                <div className="line">
                    <Line
                        orientation={orientation}
                        maxLength={lineHeightRight}
                        style={{
                            stroke: colors.text,
                            strokeWidth: '4px',
                        }}
                    />
                </div>
            </div>
            <div className="horizontal">
                <div className="line">
                    <Line
                        orientation={orientation === 'vertical' ? 'horizontal' : 'vertical'}
                        maxLength={lineHeightLeft}
                        style={{
                            stroke: colors.text,
                            strokeWidth: '4px',
                        }}
                    />
                </div>
            </div>
        </HeadingContainer>
    );
};

export default Heading;
