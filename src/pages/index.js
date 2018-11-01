import React from "react"

import Header from "../components/header"
import Container from "../components/container"
import TopImages from "../components/topimages"

import { graphql } from "gatsby"

const Index = ({ data: { prismicHomepage } }) => (
    <div>
        <Header />
        <TopImages images={prismicHomepage.data.topimages} />
            {/* <Slider>

                {prismicHomepage.data.topimages.reduce((obj, rule) => {
                    obj[rule.name] = { body: [], type: rule.type }
                    return obj;
                }, {})}


                {/* {prismicHomepage.data.topimages.forEach(function(item){
                    console.log('item: ', item.top_image.url);
                    // <TopimageSlide
                    //     src="https://source.unsplash.com/random/1920x900"
                    //     caption="Pharetra Ridiculus Bibendum Cursus"
                    //     align="right"
                    //     valign="middle"
                    // />
                })} */}
 
                {/* {prismicHomepage.data.topimages.map( ({node: image}) => {
                    console.log('lala: ', image)
                    return (
                        <TopimageSlide
                            src="https://source.unsplash.com/random/1920x900"
                            caption="Pharetra Ridiculus Bibendum Cursus"
                            align="right"
                            valign="middle"
                        />
                    )
                })} * /}
                
            </Slider>
        </TopImages> */}
        
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
                    position
                    marketing_message {
                        text
                    }
                    marketing_message_2 {
                        text
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
