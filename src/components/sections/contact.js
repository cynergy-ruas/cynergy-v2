import React from 'react';
import styled from 'styled-components';
import { Section, ts40r, ts29r, ts50b, ts20r, tsm16r, ts36r, colors } from '@design/theme';
import { media } from '@design/media';
import TeamImage from '../../images/team.png';
import { Line } from '@components';

const ContactContainer = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .line {
        margin: 70px 100px;
    }
    .data {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 600px;
        height: auto;
    }
`;

const SectionTitle = styled.div`
    ${ts50b};
    margin-bottom: 70px;
`;
const SectionDescription = styled.div`
    text-align: center;
    ${ts29r}
    margin-bottom: 50px;
    opacity: 0.7;
`;

const Contact = () => (
    <ContactContainer>
        <div className="line">
            <Line
                orientation="vertical"
                maxLength="300px"
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
            <img src={TeamImage} />
        </div>
        <div className="line">
            <Line
                orientation="vertical"
                maxLength="300px"
                style={{
                    stroke: colors.text,
                    strokeWidth: '4px',
                }}
            />
        </div>
    </ContactContainer>
);

export default Contact;
