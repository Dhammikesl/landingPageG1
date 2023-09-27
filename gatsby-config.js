/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'iNDISpensable: Revolutionise Your Operations Efficiency ',
    titleTemplate: 'iNDISpensable: Revolutionise Your Operations Efficiency ',
    description: 'Elevate Your NDIS Operations - Personalized Cloud Solution for Enhanced Efficiency',
    image: 'static/favicon.png', 
    siteUrl: 'https://www.itelasoft.com.au/',
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
        name: `iNDISpensable: Revolutionise Your Operations Efficiency `,
        short_name: `iNDISpensable`,
        start_url: `/`,
        background_color: `#43BCEC`,
        theme_color: `#43BCEC`,
        display: `standalone`,
        icon: 'static/favicon.png',
      },
    },


  ]

};