import React from 'react';
import styled from 'styled-components';
import { Section, Main, ts29r, ts60b, ts30b, ts20r, colors } from '@design/theme';
import { media } from '@design/media';
import TeamImage from '../../images/team.png';
import { Line } from '@components';

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
    img {
        width: 70%;
        height: auto;
        ${media.thone`
            width: 90%;
        `};
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

const Contact = () => (
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
                        <SectionTitle>have queries?</SectionTitle>
                        <SectionDescription>
                            our team will love to hear it from you. <br />
                            need to add some sassy lines here.
                        </SectionDescription>
                        <img src={TeamImage} alt="team contact" />
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

export default Contact;
