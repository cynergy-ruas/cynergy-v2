import React from 'react';
import { SideLine } from '@components';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { colors } from '@design/theme';
import Icon from './icons';

const RotateContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled.a`
    text-decoration: none;
    display: block;
    margin-bottom: 26px;
    svg {
        width: 24px;
        height: 24px;
        fill: ${colors.text};
    }
    &:hover,
    &:focus {
        svg {
            fill: ${colors.main};
        }
    }
`;
const Social = () => {
    return (
        <SideLine position="left">
            <RotateContainer>
                <div>
                    {socialMedia &&
                        socialMedia.map((social, idx) => (
                            <StyledLink key={idx} href={social.url}>
                                <Icon iconName={social.iconName} />
                            </StyledLink>
                        ))}
                </div>
            </RotateContainer>
        </SideLine>
    );
};
export default Social;
