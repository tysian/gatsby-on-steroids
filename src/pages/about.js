import React from 'react';
import Layout from 'partials/Layout';
import SEO from 'partials/SEO';

import About from 'components/page/About';

const AboutPage = ({ location }) => (
    <Layout>
        <SEO title="About" location={location} />
        <About />
    </Layout>
);

export default AboutPage;
