import React from 'react';
import SEO from 'layout/SEO';
import { Button, ButtonsContainer } from 'components/Button/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DropdownIcon from 'assets/icons/arrow-dropdown.svg';
import Image from 'components/Image/Image';

const AboutPage = ({location}) => (
    <>
        <SEO title="About" location={location} />
        <Container>
            <Row>
                <Col>
                    <h1>About page</h1>
                    <DropdownIcon />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonsContainer>
                        <Button>Hello</Button>
                        <Button isBig>World</Button>
                    </ButtonsContainer>
                </Col>
                <Col xs={12}>
                    <Image />
                </Col>
            </Row>
        </Container>
    </>
);

export default AboutPage;
