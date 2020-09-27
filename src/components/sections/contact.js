import React from 'react';
import styled from 'styled-components';
import { tsm18r, ts50b, ts29r, ts20r, colors, tsm12r } from '@design/theme';
import { media } from '@design/media';
import { Line } from '@components';
import photo from "../../images/team.png";
import { email } from '@config';
import { ts36b } from '../../design/theme';

const lineDisplay = true;

const ContactContainer = styled.div`
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items: center;  
    
`;

const SectionTitle = styled.div`
    ${ts50b},
    margin-bottom:12%;
    padding-bottom: 10%;
    margin-left:auto;
    margin-right:auto;
 
    display:flex;
    align-items:center;
    ${media.tablet`${ts36b}`};
    ${media.thone`
   
    `}
    ${media.phone`
        font-size: 29px;
    `}
    ${media.tiny`
        font-size: 20px;
    `} 
`;

const SectionDescription = styled.div`
text-align:center;
width:80%;
    ${ts29r}
    opacity: 0.7;
    ${media.tablet`${ts20r}`};
    ${media.thone`
        width:80%;
        margin-bottom:0x; 
    `}
    ${media.phone`
        font-size: 18px;
        width:80%;
        margin-bottom:0px;
    `}
    ${media.tiny`
        font-size: 15px;
        width:80%;
    `}   
`;

const SuperImageContainer = styled.div`

display:flex;
justify-content:center;
align-items:center;
margin-top:200px;
${media.tablet`
margin-top:140px;
`};
    ${media.thone`
    margin-top:130px;
    `};
    ${media.phone`
    margin-top:110px;
    `};
    ${media.tiny`
    margin-top:90px;
    `};
`;

const ImageContainer = styled.div`  
margin-left:auto;
    margin-right:auto;
    display:flex;
    position:relative;
    align-items:center;
    justify-content:center;
    min-height:100%;
    min-width:100%;    
`;

const ButtonContainer = styled.a`
z-index:1;
height:100%;

margin-left:auto;
    margin-right:auto;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Image = styled.img`
width:500px;
position:absolute;
z-index:1;
${media.tablet`width:400px`};
${media.thone`
    width: 380px;
` }
${media.phablet`
width:350px;
`};
${media.phone`
    width:300px;
`}
${media.tiny`
   width:250px;
`} 
`;

const StyledButton = styled.div`
    ${tsm18r};
    padding: 18px;
    color: white;
    border: 2px solid white;
    border-radius: 5px;
    font-weight: bolder;
    position: relative;
    width:auto; 
    ${media.phone`
        ${tsm12r};
        padding: 16px;
        border-width: 1px;
    `};
`;

const Contact = styled.div`
display:flex;
margin-left:auto;
margin-right:auto;
align-items:center;
width:70%;
`;


const ContactUs = () => {
    return (
        <Contact>
            <Line style={{
                stroke: colors.text,
                strokeWidth: '4px',
            }} orientation="vertical" maxLength="334px"
            />

            <ContactContainer>
                <SectionTitle>have queries?</SectionTitle>
                <SectionDescription>Our team will love to hear it from you. The goal is to make the club not just the best, but legendary.</SectionDescription>
                <SuperImageContainer>
                    <ImageContainer><Image src={photo} alt="team image" /><ButtonContainer href={`mailto:${email}`}><StyledButton >Say Hello!</StyledButton></ButtonContainer></ImageContainer>
                </SuperImageContainer>
            </ContactContainer>

            <Line style={{
                stroke: colors.text,
                strokeWidth: '4px',
                padding: '20%'
            }} orientation="vertical" maxLength="334px" />
        </Contact>

    );
};

export default ContactUs;
