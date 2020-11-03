import React, { useState, useEffect } from 'react';
import { SideLine } from '@components';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { colors } from '@design/theme';
import Icon from './icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 1000);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div>
            <TransitionGroup component={null}>
                {isMounted && (
                    <CSSTransition classNames="fade" timeout={3000}>
                        <div style={{ transitionDelay: '200ms' }}>
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
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};
export default Social;
