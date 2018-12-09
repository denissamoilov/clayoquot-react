const path = require(`path`)

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: 'The Gray Web Blog',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `samoilov`,
                // accessToken: `${process.env.API_KEY}`,
                accessToken: "MC5XOXMyUnhJQUFDMEFiMmZZ.Iu-_vXVl77-9b1UB77-9R0vvv70BdO-_vQEf77-9VC7vv71377-977-977-977-9HO-_ve-_vUt_77-9",
                linkResolver: ({
                    node,
                    key,
                    value
                }) => post => `/${post.uid}`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
                name: 'images',
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`
    ],
}