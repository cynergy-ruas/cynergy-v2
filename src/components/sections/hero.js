import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ts100b, tsd80d, ts80r, ts50r, ts50b, ts36b, tsd40d, tsd36d, ts40r, ts18r, ts16r, colors, Section } from '@design/theme';
import { media } from '@design/media';
import { email, tagline } from '@config';
import { Button } from '@components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const StyledContactButton = styled.a`
    margin-top: 60px;
`;
const HeroContainer = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 80vh;
`;

const Greeting = styled.div`
    ${ts100b}
    ${media.tablet`${ts50b}`};
    ${media.phone`${ts50b}`};
    ${media.desktop``};
    span {
        color: ${colors.main};
    }
`;
const Name = styled.div`
    ${ts80r}
    ${media.tablet`${ts40r}`};
    ${media.phone`${ts40r}`};
    ${media.tiny`${ts36b}`};
    ${media.desktop``};
    span {
        ${tsd80d};
        ${media.tablet`${tsd40d}`};
        ${media.phone`${tsd40d}`};
        ${media.tiny`${tsd36d}`};
        ${media.desktop``};
        b {
            color: ${colors.main};
        }
    }
`;
const Tagline = styled.div`
    ${ts50r}
    opacity: 0.6;
    ${media.tablet`${ts18r}`};
    ${media.phone`${ts18r}`};
    ${media.tiny`${ts16r}`};
    ${media.desktop``};
`;
const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 1000);
        return () => clearTimeout(timeout);
    }, []);

    const one = () => (
        <div style={{ transitionDelay: '100ms' }}>
            <Greeting>
                Hello<span>.</span>
            </Greeting>
        </div>
    );
    const two = () => (
        <div style={{ transitionDelay: '200ms' }}>
            <Name>
                this is&nbsp;
                <span>
                    CY<b>NERGY</b>
                </span>
            </Name>
        </div>
    );
    const three = () => (
        <div style={{ transitionDelay: '300ms' }}>
            <Tagline>{tagline}</Tagline>
        </div>
    );
    const four = () => (
        <div style={{ transitionDelay: '400ms', marginTop: '60px' }}>
            <StyledContactButton href={`mailto:${email}`}>
                <Button text={'Get in touch'} />
            </StyledContactButton>
        </div>
    );

    const items = [one, two, three, four];

    return (
        <HeroContainer>
            <TransitionGroup component={null}>
                {isMounted &&
                    items.map((item, i) => (
                        <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                            {item}
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </HeroContainer>
    );
};

export default Hero;
