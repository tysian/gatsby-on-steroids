import React from 'react';
import Layout from 'partials/Layout';
import SEO from 'partials/SEO';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactForm from 'components/page/Contact/ContactForm';

const ContactPage = ({ location }) => (
    <Layout>
        <SEO title="Contact" location={location} />
        <Container>
            <Row>
                <Col>
                    <h1>Contact page</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default ContactPage;
