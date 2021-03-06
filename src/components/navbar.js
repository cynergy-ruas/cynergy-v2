import React, { Component } from 'react';
import styled from 'styled-components';
import { navLinks } from '@config';
import { tsm18r, colors } from '@design/theme';
import { media } from '@design/media';
import { Menu } from '@components';
import Icon from './icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 40px 10px 40px;
    ${media.phone`margin: 30px 18px 10px 18px;`};
    ${media.tablet`margin: 30px 18px 10px 18px;`};
    ${media.desktop``};
`;
const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        display: block;
        width: 300px;
        height: auto;
        ${media.phone`width: 200px`};
        ${media.tablet`width: 200px`};
        ${media.desktop``};
    }
    svg {
    }
`;
const Hamburger = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    ${media.tablet`display:flex`};
    z-index: 11;
`;
const HamburgerBox = styled.div`
    position: relative;
`;

const HamburgerLine = styled.div`
    width: 24px;
    height: 2px;
    background-color: ${colors.main};
    border-radius: 10px;
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    right: 0;
    transform: ${props => (props.isMenuOpen ? `rotate(45deg)` : '')};
    &:before,
    &:after {
        width: 24px;
        height: 2px;
        background-color: ${colors.main};
        border-radius: 10px;
        content: '';
        position: absolute;
        display: block;
        left: auto;
        right: 0;
    }
    &:before {
        top: ${props => (props.isMenuOpen ? '0px' : '-10px')};
        width: ${props => (props.isMenuOpen ? '100%' : '125%')};
        transform: ${props => (props.isMenuOpen ? `rotate(-90deg)` : '')};
    }
    &:after {
        bottom: ${props => (props.isMenuOpen ? '0px' : '-10px')};
        width: ${props => (props.isMenuOpen ? '100%' : '75%')};
        opacity: ${props => (props.isMenuOpen ? 0 : 1)};
    }
`;

const NavLinks = styled.div`
    ${tsm18r}
    display: flex;
    ${media.phone`display: none`};
    ${media.tablet`display:none`};
    ${media.desktop``};
`;
const NavLink = styled.div`
    margin-left: 50px;
`;

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            text: '',
            author: '',
            isMounted: false,
        };
    }
    async componentDidMount() {
        setTimeout(() => {
            this.setState({
                isMounted: true,
            });
        }, 500);
        window.scrollTo(0, 0);
        await fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
            .then(response => response.json())
            .then(data => {
                if (data && data['en']) {
                    this.setState({
                        text: data['en'],
                        author: data.author,
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    noScroll() {
        window.scrollTo(0, 0);
    }

    toggleMenu = () => {
        this.setState(
            prevState => ({
                isMenuOpen: !prevState.isMenuOpen,
            }),
            () => {
                if (this.state.isMenuOpen) {
                    window.addEventListener('scroll', this.noScroll);
                } else {
                    window.removeEventListener('scroll', this.noScroll);
                }
            }
        );
    };
    render() {
        const { isMounted } = this.state;
        return (
            <>
                <NavbarContainer>
                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames="fade" timeout={3000}>
                                <LogoWrapper style={{ transitionDelay: '100ms' }}>
                                    <a href="/">
                                        <Icon iconName="logo" />
                                    </a>
                                </LogoWrapper>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames="fade" timeout={3000}>
                                <Hamburger onClick={() => this.toggleMenu()}>
                                    <HamburgerBox>
                                        <HamburgerLine isMenuOpen={this.state.isMenuOpen} />
                                    </HamburgerBox>
                                </Hamburger>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                    <NavLinks>
                        <TransitionGroup component={null}>
                            {isMounted &&
                                navLinks.map((navLink, index) => (
                                    <CSSTransition key={index} classNames="fadedown" timeout={3000}>
                                        <NavLink style={{ transitionDelay: `${index * 100}ms` }}>
                                            <a href={navLink.url}>{navLink.name}</a>
                                        </NavLink>
                                    </CSSTransition>
                                ))}
                        </TransitionGroup>
                    </NavLinks>
                </NavbarContainer>
                <Menu isMenuOpen={this.state.isMenuOpen} quote={{ text: this.state.text, author: this.state.author }} handleOnClick={this.toggleMenu.bind(this)} />
            </>
        );
    }
}
export default Navbar;
