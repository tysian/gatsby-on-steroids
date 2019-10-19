import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImage = styled(Img)`
    max-width: 100%;
    margin-top: 30px;
`;

const myAwesomeImage = () => {
    /**
     * TODO:
     * - [] Find a way to make it reusable
     */
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "example-image.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }
    `);

    return (
        <>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
        </>
    );
};

export default myAwesomeImage;
