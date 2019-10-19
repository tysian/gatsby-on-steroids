import React from 'react';
import Layout from 'partials/Layout';
import SEO from 'partials/SEO';

const NotFoundPage = ({ location }) => (
    <Layout>
        <SEO title="404 NotFound" location={location} />
        <h1>NotFound page</h1>
    </Layout>
);

export default NotFoundPage;
