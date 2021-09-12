import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Heading } from '@components';
import { Section, ts29r, ts20r, Main } from '@design/theme';
import { srConfig } from '@config';
import { media } from '@design/media';
import ScrollReveal from 'scrollreveal';
const AboutContainer = styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const Co = styled.span`
    color: #9d1d59;
`;

const AboutBody = styled.div`
    opacity: 0.7;
    ${ts29r}
    display:flex;
    text-align: justify;
    ${media.thone`
        ${ts20r}
    `};
`;
const About = () => {
    const scrollRevealContainer = useRef(null);
    const revealHeading = useRef(null);
    const revealData = useRef(null);
    useEffect(() => {
        ScrollReveal().reveal(scrollRevealContainer.current, srConfig(200));
        ScrollReveal().reveal(revealHeading.current, srConfig(300));
        ScrollReveal().reveal(revealData.current, srConfig(400));
    }, []);
    return (
        <AboutContainer id="about" ref={scrollRevealContainer}>
            <Main orientation="vertical" containsHeading>
                <div className="header" ref={revealHeading}>
                    <Heading orientation="vertical" lineHeightRight="290px" lineHeightLeft="600px">
                        about
                    </Heading>
                </div>
                <div className="content" ref={revealData}>
                    <AboutBody>
                        <p>
                            Cynergy is the first of its kind coding club at <Co>RUAS</Co>. The purpose of Cynergy is embodied in its core open principles - <Co>Collaboration</Co>, <Co>Innovation</Co> and <Co>Competition</Co>. Cynergy is a platform to promote learning and development of programming skills. It empowers
                            students with competitive programming skills through activities like Hackathon and Share sessions.
                        </p>
                    </AboutBody>
                </div>
            </Main>
        </AboutContainer>
    );
};

export default About;
