import React from 'react';
import SEO from 'layout/SEO';

const NotFoundPage = ({ location }) => (
    <>
        <SEO title="404 NotFound" location={location} />
        <h1>NotFound page</h1>
    </>
);

export default NotFoundPage;
