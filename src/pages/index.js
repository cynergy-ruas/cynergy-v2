import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Hero, Events, About } from '@components';
import { ContactUs } from '../components';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Events />
        <About />
        <ContactUs />
    </Layout>
);

export default IndexPage;
