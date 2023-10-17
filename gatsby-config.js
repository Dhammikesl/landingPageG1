/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Landing Page Gatsby/ React ',
    titleTemplate: 'Landing Page Gatsby/ React',
    description: 'Landing Page Gatsby/ React: RMDP Rathnayaka 2023',
    image: 'static/favicon.png', 
    siteUrl: 'https://www.kaalasara.com/',
  },
  plugins: ["gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"

    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Landing Page Gatsby/ React `,
        short_name: `Landing Page Gatsby/ React`,
        start_url: `/`,
        background_color: `#43BCEC`,
        theme_color: `#43BCEC`,
        display: `standalone`,
        icon: 'static/favicon.png',
      },
    },


  ]

};