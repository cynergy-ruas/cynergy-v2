import React from 'react';

import TwitterIcon from './twitter';
import LinkedinIcon from './linkedin';
import InstagramIcon from './instagram';
import GithubIcon from './github';
import LogoIcon from './logo';

const ICONS = {
    twitter: <TwitterIcon />,
    linkedin: <LinkedinIcon />,
    github: <GithubIcon />,
    instagram: <InstagramIcon />,
    logo: <LogoIcon />,
};

const Icon = props => {
    return <div>{ICONS[props.iconName]}</div>;
};

export default Icon;
