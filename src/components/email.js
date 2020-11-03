import React, { useState, useEffect } from 'react';
import { SideLine } from '@components';
import styled from 'styled-components';
import { email } from '@config';
import { tsm18r } from '@design/theme';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const RotateContainer = styled.div`
    ${tsm18r}
    position: relative;
    display: block;
    writing-mode: vertical-lr;
    padding-bottom: 12px;
`;
const Email = () => {
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
                        <div style={{ transitionDelay: '100ms' }}>
                            <SideLine position="right">
                                <RotateContainer>
                                    {' '}
                                    <a href={`mailto:${email}`}>{email} </a>
                                </RotateContainer>
                            </SideLine>
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default Email;
