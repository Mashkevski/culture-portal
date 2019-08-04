module.exports = {
  pathPrefix: '/Culture-Portal',
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/data/intl`,
        languages: ['en', 'ru', 'by'],
        defaultLanguage: 'ru',
        redirect: true,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'dbe1ycf5kqlv',
        accessToken: 'rRYa2MDvqJixn-7qdhOB0cdsONIsx93exAhTlINdv-k',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    'gatsby-transformer-javascript-frontmatter',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
