import React from "react"

import Header from "../components/Header"
// import Container from "../components/container"
import TopImages from "../components/Topimages"

import { graphql } from "gatsby"

const Subpage = () => {
    // console.log(data);
    return (<div>
        {/* <Header />
        {data.allPrismicSubpage.edges.map(({node}) => (
            <TopImages key={node.id} images={node.data.topimages} />
            
            // <Container>
            //     <div dangerouslySetInnerHTML={{ __html: node.data.copy.html }} />
            // </Container>
        ))} */}
    </div>)
}

export default Subpage