import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Hero, Events, About, Contact } from '@components';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Events />
        <Contact />
        <About />
    </Layout>
);

export default IndexPage;
