module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-sharp'
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: process.env.GATSBY_TOKEN_PUBLIC || process.env.GATSBY_TOKEN_PREVIEW,
        homeSlug: 'home',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    }
  ]
}
