const path = require('path');
const config = require('./data/config');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: config.defaultTitle,
        description: config.defaultDescription,
        author: config.author,
        siteUrl: config.url,
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-optimize-svgs`,
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/layout/Layout`),
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: config.url,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets\/icons/, // See below to configure properly
                },
            },
        },
        {
            resolve: 'gatsby-plugin-styled-components',
            options: {
                displayName: true,
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                // files such as images, icons, fonts, css styles
                assets: path.join(__dirname, 'src/assets'),
                // main components folder
                components: path.join(__dirname, 'src/components'),
                // layout folder which contain main theme stuff like SEO, Layout or theme settings
                layout: path.join(__dirname, 'src/layout'),
                // Folder with data, such as page info, google analitycs or google recaptcha
                data: path.join(__dirname, 'data'),
                // static files, they are copied directly into public/ folder
                static: path.join(__dirname, 'static'),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ['develop'],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-stylelint',
            options: { files: ['**/*.{js,jsx}'] },
        },
        {
            resolve: 'gatsby-plugin-nprogress',
            options: {
                color: config.themeColor,
                showSpinner: false,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.defaultTitle,
                short_name: `starter`,
                start_url: `/`,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: `minimal-ui`,
                icon: config.faviconPath, // This path is relative to the root of the site.
            },
        },
    ],
};
