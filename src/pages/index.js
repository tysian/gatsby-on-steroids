import React from 'react';
import Layout from 'partials/Layout';
import SEO from 'partials/SEO';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * TODO:
 * - [] Canonical and sitemap configure
 * - [x] Image optimize on About page
 * - [x] SVGs optimize on About page
 * */

const IndexPage = ({ location }) => (
    <Layout>
        <SEO title="Home" location={location} />
        <Container>
            <Row>
                <Col>
                    <h1>Home page</h1>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default IndexPage;
