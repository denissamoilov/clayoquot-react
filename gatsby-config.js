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
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `4y1g93b95ep2`,
                accessToken: `7d13661d4c228410ccd617692cfe78879b11b88c004c3835b3c197becee7e41e`,
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