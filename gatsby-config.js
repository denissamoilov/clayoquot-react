const path = require(`path`)

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
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