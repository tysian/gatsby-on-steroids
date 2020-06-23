import React from 'react';
import SEO from 'layout/SEO';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IndexPage = ({ location }) => {
    return (
        <>
            <SEO title="Home" location={location} />
            <Container>
                <Row>
                    <Col>
                        <h1>Home page</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default IndexPage;
