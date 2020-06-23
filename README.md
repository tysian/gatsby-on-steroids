<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" style="width:60px;" />
  </a>
</p>
<h1 align="center">
  Gatsby's starter
</h1>
<p align="center"><i style="font-size: 1rem; color: #ccc;">this starter was not tested yet and its still in development, so there can be some bugs...</i></p>
Are you bored of configuring default starter kit over and over again? So... here we go!

##  🤔 Why Gatsby? Pros vs Cons

### Pros

- Incredibly fast, SEO friendly
- Comes with ReactJS
- Supports GraphQL
- Great documentation and huge user community
- Builds a pure HTML files, so you don't have node server
- No page reload when navigating
- Can use data from any source like WordPress, Contentful, MD Files and more
- Lot of starter kits and plugins
- Gatsby Preview as a shareable, real-time private playground for developers, designers and content creators

### Cons

- If there is a lot of data build time can increase and it may cause some errors
- Weird routing (using `pages` folder or `gatsby-node.js` to create pages)
- Adding Redux or any state management pattern can be more difficult
- Any data change/update require build and files upload, so it's highly recommended to use Continuous Integration Service

## 📦 What changed in this kit?
1. Fully configured **ESLint**, **Prettier**, **Stylelint**
2. **Husky** & **lint-staged** - before you commit, it will try to fix all fixable issues found in project and won't commit if it find any error
3. Updated folders structure
4. Added **Formik** and **Yup** with **Google Recaptcha** to handle forms
5. **dotenv** dependency to handle `.env` files
6. **Styled-components** to handle styling in JavaScript, fully configured with theme provider
7. **React anchor link smooth scroll** - animated scroll on anchor link (for example: `#skills`)
8. PWA Ready
9. Added **Bootstrap** as a CSS Framework

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    *Note: You'll also see a second link:* `http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.
```
.
├── LICENSE
├── README.md
├── data
│   └── config.js
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── package-lock.json
├── package.json
├── src
│   ├── assets
│   │   ├── fonts
│   │   │   └── README.md
│   │   ├── icons
│   │   │   └── arrow-dropdown.svg
│   │   ├── images
│   │   │   ├── example-image.jpg
│   │   │   ├── gatsby-astronaut.png
│   │   │   └── gatsby-icon.png
│   │   └── styles
│   │       └── fonts.css
│   ├── components
│   │   ├── Button
│   │   │   └── Button.js
│   │   ├── ContactForm
│   │   │   ├── ContactForm.js
│   │   │   └── ContactForm.styles.js
│   │   ├── Footer
│   │   │   ├── Footer.js
│   │   │   ├── Footer.styles.js
│   │   │   └── social.json
│   │   ├── Header
│   │   │   ├── Header.js
│   │   │   └── Header.styles.js
│   │   └── Image
│   │       └── Image.js
│   ├── layout
│   │   ├── Layout.js
│   │   ├── Layout.styles.js
│   │   ├── SEO.js
│   │   └── theme.js
│   └── pages
│       ├── 404.js
│       ├── about.js
│       ├── contact.js
│       └── index.js
├── static
│   └── thumbnail
│       └── reactjs-logo-512.png
└── yarn.lock
```

1. **`/data`** - This directory contains all page data, like URLs, author info,  theme color, socials, etc.

3. **`/src`**: This directory will contain all the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

4.  **`/static`** - This directory contains static files. They will be copied to `public` folder

5. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6. **`.prettierrc`** & **`.prettierignore`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
   For example, if you are using **Redux** - you want to wrap all your page of Provider, so you can use `wrapRootElement` hook.

8. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
   Let's take a look what changed here:

   + **`gatsby-transformer-sharp`** & **`gatsby-plugin-sharp`** - helps with images optimization

   + **`gatsby-plugin-offline`** - allows to use this page offline, as PWA

   + **`gatsby-plugin-manifest`** -modifies `manifest.json` file for PWA

   + **`gatsby-plugin-react-helmet`** - allows to modify the \<head> tag

   + **`gatsby-plugin-sitemap`** - allows to create a sitemap

   + **`gatsby-plugin-optimize-svgs`** & **`gatsby-plugin-react-svg`** - helps with holding SVG optimization and using them as components

   + **`gatsby-plugin-canonical-urls`** - create canonical URLs in \<head>

   + **`gatsby-plugin-styled-components`** - styling in JS, main styling component

   + **`gatsby-plugin-root-import`** - allows to create aliases for imports, for example

     ``` jsx
     // before
     @import Layout from '../../components/Button'
     
     //after
     @import Layout from 'components/Button'
     ```

   + **`gatsby-source-filesystem`** - helper with filesystem management, for example graphql imports

   + **`gatsby-plugin-eslint`** & **`gatsby-plugin-stylelint`** - linters configuration
   
   + **`gatsby-plugin-layout`** - creates wrapper for all pages

   + **`gatsby-plugin-nprogress`** - uses  [NProgress](http://ricostacruz.com/nprogress/) library to represent page loader

9. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process. 
   For example: you can use `createPages` function to create pages dynamically (blog posts, user profiles, etc.) using data from REST/GraphQL request **OR** even set of **`*.md`** files. 

10. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

11. **`LICENSE`**: Gatsby is licensed under the MIT license.

12. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your NPM dependencies that were installed for your project. **(You won’t change this file directly).**

13. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how NPM knows which packages to install for your project.

14. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

