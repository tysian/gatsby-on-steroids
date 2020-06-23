import React from 'react';
import SEO from 'layout/SEO';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactForm from '../components/ContactForm/ContactForm';

const ContactPage = ({ location }) => (
    <>
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
    </>
);

export default ContactPage;
