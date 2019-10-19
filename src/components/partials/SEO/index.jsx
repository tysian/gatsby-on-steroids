/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import Thumbnail from 'static/thumbnail/reactjs-logo-512.png';
import {
    url,
    defaultDescription,
    social,
    defaultTitle,
    socialLinks,
    address,
    contact,
    legalName,
    foundingDate,
    logo,
    themeColor,
    language,
} from 'data/config';
import 'bootstrap/dist/css/bootstrap.css';

export const SEO = ({ title: pageTitle, location: { pathname } }) => {
    const title =
        pathname !== '/' ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
    const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
      }`;
    return (
        <Helmet>
            <meta name="description" content={defaultDescription} />
            <meta name="image" content={Thumbnail} />

            <meta property="og:url" content={`${url}`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={defaultTitle} />
            <meta property="og:image" content={Thumbnail} />
            <meta property="fb:app_id" content={social.facebook} />

            <meta name="theme-color" content={themeColor} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={socialLinks.twitter} />
            <meta name="twitter:site" content={social.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={defaultTitle} />
            <meta name="twitter:image:src" content={Thumbnail} />
            <script type="application/ld+json">
                {structuredDataOrganization}
            </script>
            <link rel="publisher" href={socialLinks.github} />

            <title>{title}</title>
            <html lang={language} dir="ltr" />
        </Helmet>
    );
};

export default SEO;
