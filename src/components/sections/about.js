import React from 'react';
import styled from 'styled-components';
import { Heading } from '@components';
import { Section, ts36r, ts20r, ts29l } from '@design/theme';
import { media } from '@design/media';
import photo from '../../images/about.png';

const AboutContainer = styled(Section)`   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    min-height: 100vh;
    // ${media.phone`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items:center;
    // `}
    
`;

const Co = styled.span`
    color: #9d1d59;
`;

const AboutBody = styled.div`
    ${ts29l}
    display:flex;
    text-align:justify;
    align-items:center;
    margin-left:10%;
    margin-right:10.8%;
    margin-top: -28%;
    color: #F8F8F8;
    opacity: 0.7;
    justify-content: space-evenly;
    //padding:5px 5 px 5px 5px;

    ${media.tablet`${ts36r}
    font-size:24px;
    width: 80%;
    height: 100%;
    margin-bottom: 10%;
    margin-left:25px;
    margin-right:35px;
    
    padding-left:25px;
    padding-right:35px;`};
    ${media.thone`${ts20r}
    width: 80%;
        height: 100%;
        margin-bottom: 10%;
        margin-left:auto;
        margin-right:auto;

        padding-left:25px;
        padding-right:35px;
        padding-top:30px;
        

        margin-top:-25%;
    `}
    ${media.phone`
        font-size:14px;
        width: 80%;
        height: 100%;
        margin-bottom: 10%;
        margin-left:auto;
        margin-right:10px;
    `}
    ${media.tiny`
        font-size: 24px;
        width: 80%;
        height: 100%;
        margin-bottom: 10%;
        margin-left:auto;
        margin-right:10px;
    `}
`;
const About = () => {
    return (
        <AboutContainer>
            <Heading orientation="vertical" maxLength1="290px" maxLength2="880px">
                about{' '}
            </Heading>
            <AboutBody>
                <p>
                    Cynergy is the first of its kind coding club at <Co>RUAS</Co>. The purpose of Cynergy is embodied in its core open principles - <Co>Collaboration</Co>, <Co>Innovation</Co> and <Co>Competition</Co>. Cynergy is a platorm to promote learning and development of programming skills. It empowers students
                    with competitive programming skills through activities like Hackathon and Share sessions.
                </p>
            </AboutBody>

            <img
                src={photo}
                style={{
                    width: '70%',
                    height: '50%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center',
                    border: ' 1px solid black',
                    padding: '0px',
                    // boxShadow: '5px 10px #9D1D59',
                    outline: '4px solid #9D1D59',
                    outlineOffset: '15px',
                }}
                alt="Cynergy Team"
            />
        </AboutContainer>
    );
};

export default About;
