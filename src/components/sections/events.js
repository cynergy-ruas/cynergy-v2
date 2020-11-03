import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { eventCardsInfo, eventsTitle } from '@config';
import { Section, Main, ts40m, ts20r, ts22m, ts16r } from '@design/theme';
import { Heading } from '@components';
import { media } from '@design/media';
import { srConfig } from '@config';
import ScrollReveal from 'scrollreveal';

const EventsSection = styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 100vh;
    position: relative;
`;

const EventCardsContainer = styled.div``;

const EventCard = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    margin-bottom: 60px;
    ${media.thone`
        margin-bottom: 30px;
    `};
    &:last-of-type {
        margin-bottom: 0;
    }
    
    &:nth-of-type(odd) {
        .data {
        grid-column: 7 / -1;
        text-align: right;
        ${media.desktop`
            grid-column: 1 / -1;
        `};
        ${media.thone`
            grid-column: 1 / -1;
        `};
        }
        .asset {
        grid-column: 1 / 8;
        ${media.desktop`
            grid-column: 1 / -1;
            opacity: 1;
        `};
        ${media.thone`
            grid-column: 1 / -1;
            opacity: 1;
        `};
        }
    }
    /* direction: ${props => (props.reverse ? 'ltr' : 'rtl')}; */
    .asset{
        grid-column: 6 / -1;
        grid-row: 1 / -1;
        position: relative;
        z-index: 1;
        height: 100%;
        ${media.desktop`
            grid-column: 1 / -1;
            opacity: 1;
        `};
        img {
            width: 100%;
            max-width: 100%;
            vertical-align: middle;
            position: relative;
            mix-blend-mode: multiply;
        }
        &:hover,
        &:focus{
            background: transparent;
            &:before{
            background: transparent;
            filter: none;
            }
        }
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
            background-color: rgba(45,0,91,0.65);
            mix-blend-mode: normal;
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            width: 100%;
            height: auto;
        }
    }
    .data{
        position: relative;
        grid-column: 1 / 7;
        grid-row: 1 / -1;
        z-index: 5;
        ${media.desktop`
            grid-column: 1 / -1;
            padding: 30px 18px 20px;
            z-index: 5;
        `};
        ${media.thone`
            grid-column: 1 / -1;
            padding: 30px 18px 20px;
            z-index: 5;
        `};
        ${media.phablet`padding: 30px 25px 20px;`};
        .heading{
            text-align: ${props => (props.reverse ? 'right' : 'left')};
            ${ts40m}
            ${media.thone`${ts22m}
                text-align: left;
            `};
        }
        .description{
            text-align: left;
            box-shadow: ${props => (props.reverse ? '-4px 4px 14px -2px #000' : '4px 4px 14px -2px #000')}; 
            margin-top: 26px;
            background-color: #301421;
            color: rgba(255,255,255,0.7);
            padding: 20px 20px 30px;
            ${ts20r}
            ${media.thone`
                ${ts16r}
                color: rgba(255,255,255,1);
                background-color: transparent;
                padding: 10px 0;
                box-shadow: none;
                &:hover {
                    box-shadow: none;
                }
            `};
        }
    }
`;

const Events = () => {
    const scrollRevealContainer = useRef(null);
    const revealHeading = useRef(null);
    const revealData = useRef([]);
    useEffect(() => {
        ScrollReveal().reveal(scrollRevealContainer.current, srConfig());
        ScrollReveal().reveal(revealHeading.current, srConfig(100));
        revealData.current.forEach((ref, i) => ScrollReveal().reveal(ref, srConfig((i + 2) * 100)));
    }, []);
    return (
        <EventsSection id="events" ref={scrollRevealContainer}>
            <Main orientation="horizontal" containsHeading>
                <div className="header" ref={revealHeading}>
                    <Heading orientation="horizontal" lineHeightRight={'500px'} lineHeightLeft={'500px'}>
                        {eventsTitle}
                    </Heading>
                </div>
                <div className="content">
                    <EventCardsContainer>
                        {eventCardsInfo.map((info, index) => (
                            <EventCard key={index} reverse={index % 2 === 0} ref={el => (revealData.current[index] = el)}>
                                <div className="asset">
                                    <img src={info.image} alt={info.title} />
                                </div>
                                <div className="data">
                                    <div className="heading">{info.title}</div>
                                    <div className="description">{info.description}</div>
                                </div>
                            </EventCard>
                        ))}
                    </EventCardsContainer>
                </div>
            </Main>
        </EventsSection>
    );
};

export default Events;
