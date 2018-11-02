import React from "react"

import Header from "../components/header"
import Container from "../components/container"
import TopImages from "../components/topimages"

import { graphql } from "gatsby"

const Index = ({ data: { prismicHomepage } }) => (
    <div>
        <Header />
        <TopImages images={prismicHomepage.data.topimages} />
        
        <Container>
            <h1>{prismicHomepage.data.title.text}</h1>
            <h2>{prismicHomepage.data.subtitle.text}</h2>
            <div dangerouslySetInnerHTML={{ __html: prismicHomepage.data.copy.html }} />
        </Container>
    </div>
)

export default Index

export const pageQuery = graphql`
    query IndexQuery {
        prismicHomepage {
            data {
                topimages {
                    top_image {
                        url
                    }
                    message_align
                    message_valign
                    marketing_message {
                        html
                    }
                }
                title {
                    text
                }
                subtitle {
                    text
                }
                copy {
                    html
                }
            }
        }
    }
`;
