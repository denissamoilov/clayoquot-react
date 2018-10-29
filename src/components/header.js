import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"


import headerStyles from "./css/header.module.css"


export default () => (
    <StaticQuery
        query = {graphql`
            query LogoQuery {
                imageOne: file(relativePath: { eq: "gatsby-icon.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            base64
                            tracedSVG
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                            originalImg
                            originalName
                        }
                    }
                }
            }
        `}
        render = { data => {
            
                console.log('data: ', data)
            
                return (

                    <header className={headerStyles.header}>
                        <a className={headerStyles.logo} href="index.js">
                            <Img fixed={data.imageOne.childImageSharp.fluid} />
                        </a>
                    </header>
                )
            }
        }
    />
)

// const Header = (props) => {
//     console.log('props', props)

//     return (

//         <header className={headerStyles.header}>
//             <a className={headerStyles.logo} href="index.js">
//                 <Img fixed={props.data.imageOne.childImageSharp.fixed} />
//             </a>
//         </header>
//     )
// }

// export default Header

// export const query = graphql`
//     query {
//         imageOne: file(relativePath: { eq: "gatsby-icon.png" }) {
//             childImageSharp {
//                 fluid(maxWidth: 1000) {
//                     base64
//                     tracedSVG
//                     aspectRatio
//                     src
//                     srcSet
//                     srcWebp
//                     srcSetWebp
//                     sizes
//                     originalImg
//                     originalName
//                 }
//             }
//         }
//     }
// `;