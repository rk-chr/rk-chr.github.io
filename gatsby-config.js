module.exports = {
  siteMetadata: {
    title: `Front-end Developer`,
    description: `I'm Rama kishore, Front-end Developer @ UptimeAI`,
    author: `rama`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rama | Front-end Developer`,
        short_name: `Rama`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/assets/favicons/mstile-150x150.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
