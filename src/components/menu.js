import React from 'react';
import styled from 'styled-components';
import { navLinks } from '@config';
import { tsm18r } from '@design/theme';
import { media } from '@design/media';
import { Quote } from '@components';
import Icon from './icons';
import { socialMedia } from '@config';
import { colors } from '@design/theme';
const StyledLink = styled.a`
    text-decoration: none;
    margin: 10px;
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
const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 75vw;
    height: 100vh;
    z-index: 10;
    outline: 0;
    transition: transform 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translateX(${props => (props.isMenuOpen ? 0 : 75)}vw);
    visibility: ${props => (props.isMenuOpen ? 'visible' : 'hidden')};
    display: none;
    ${media.tablet`display: block;`};
    background-color: #1f1f1f;
    justify-content: space-evenly;
    align-items: center;
`;
const QuoteContainer = styled.div`
    background-color: #272727;
    width: 100%;
    padding: 4px 12px;
`;

const NavLinks = styled.div`
    ${tsm18r}
`;
const NavLink = styled.div`
    margin-top: 20%;
    text-align: center;
`;
const SocialMediaLinks = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
`;

const Menu = ({ isMenuOpen, quote }) => {
    return (
        <StyledMenu isMenuOpen={isMenuOpen} aria-hidden={!isMenuOpen} tabIndex={isMenuOpen ? 1 : -1}>
            <NavLinks>
                {navLinks.map((navLink, index) => (
                    <NavLink key={index}>
                        <a href={navLink.url}>{navLink.name}</a>
                    </NavLink>
                ))}
            </NavLinks>
            <SocialMediaLinks>
                {socialMedia &&
                    socialMedia.map((social, idx) => (
                        <StyledLink key={idx} href={social.url}>
                            <Icon iconName={social.iconName} />
                        </StyledLink>
                    ))}
            </SocialMediaLinks>
            <QuoteContainer>
                <Quote {...quote} />
            </QuoteContainer>
        </StyledMenu>
    );
};

export default Menu;
