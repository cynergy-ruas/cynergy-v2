import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Section, Main, ts29r, ts60b, ts30b, ts20r, colors } from '@design/theme';
import { media } from '@design/media';
import TeamImage from '../../images/team.png';
import { Line } from '@components';
import { srConfig, whatsapp } from '@config';
import ScrollReveal from 'scrollreveal';
import { Button } from '@components';

const ContactContainer = styled(Section)`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .main {
        display: -webkit-box;
        display: -moz-box;
        ${media.thone`
            display: flex;
        `};
    }
    .line {
        margin: 70px 0px;
        ${media.thone`
            display: none;
        `};
    }
    .data {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const StyledContactButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
        width: 70%;
        height: auto;
        ${media.thone`
            width: 90%;
        `};
        z-index: 1;
    }
    .cta {
        z-index: 2;
        position: absolute;
    }
`;

const SectionTitle = styled.div`
    ${ts60b}
    margin-bottom: 70px;
    ${media.thone`
        ${ts30b}
        margin-bottom: 4vh;
    `};
`;
const SectionDescription = styled.div`
    text-align: center;
    ${ts29r}
    ${media.thone`
        ${ts20r}
    `};
    margin-bottom: 50px;
    opacity: 0.7;
`;

const Contact = () => {
    const revealDescription = useRef(null);
    const revealHeading = useRef(null);
    const revealButton = useRef(null);
    useEffect(() => {
        ScrollReveal().reveal(revealHeading.current, srConfig(200));
        ScrollReveal().reveal(revealDescription.current, srConfig(300));
        ScrollReveal().reveal(revealButton.current, srConfig(400));
    }, []);
    return (
        <ContactContainer id="contact">
            <Main>
                <div className="content">
                    <div className="main">
                        <div className="line">
                            <Line
                                orientation={'vertical'}
                                maxLength={500}
                                style={{
                                    stroke: colors.text,
                                    strokeWidth: '4px',
                                }}
                            />
                        </div>
                        <div className="data">
                            <SectionTitle ref={revealHeading}>have queries?</SectionTitle>
                            <SectionDescription ref={revealDescription}>
                                our team will love to hear it from you. <br />
                                need to add some sassy lines here.
                            </SectionDescription>
                            <StyledContactButton ref={revealButton}>
                                <img src={TeamImage} alt="team contact" />
                                <a className="cta" href={whatsapp}>
                                    <Button mode={'light'} text={'Start building'} />
                                </a>
                            </StyledContactButton>
                        </div>
                        <div className="line">
                            <Line
                                orientation={'vertical'}
                                maxLength={500}
                                style={{
                                    stroke: colors.text,
                                    strokeWidth: '4px',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Main>
        </ContactContainer>
    );
};

export default Contact;
