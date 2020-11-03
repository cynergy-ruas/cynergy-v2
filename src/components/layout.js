/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyles from '@design';
import { Navbar, Email, Social, PrincipleText, Loader } from '@components';

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    min-height: 100vh;
`;

const isBiggerScreen = typeof window !== `undefined` ? window.innerWidth >= 1200 && window.innerHeight >= 650 : false;

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div id="root">
            <GlobalStyles />
            {isLoading ? (
                <Loader
                    onFinishLoad={() => {
                        setIsLoading(false);
                    }}
                />
            ) : (
                <StyledContent>
                    <Navbar />
                    <PrincipleText />
                    <main>{children}</main>
                    {isBiggerScreen ? <Email /> : ''}
                    {isBiggerScreen ? <Social /> : ''}
                </StyledContent>
            )}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

// const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//     }
// `);
