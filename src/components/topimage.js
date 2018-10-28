import React from "react"
import Img from "gatsby-image"

import slideStyles from "./css/topimage.module.css"

const Slide = props => (

    // console.log('align: ', props.align)

    <figure className={slideStyles.slide} style={{backgroundImage: `url(${props.src})`}}>
        {/* <img src={props.src} alt=""/> */}
        <Img fixed={props.src.childImageSharp.fixed} />
        <figcaption className={`${slideStyles[props.align]} ${slideStyles[props.valign]} ${slideStyles.caption}`}>
            <div className={slideStyles.wrapper}>
                {props.caption}
            </div>
        </figcaption>
    </figure>
)

export default ({src, caption, align, valign}) => (
    <Slide
        src={src}
        caption={caption}
        align={align}
        valign={valign}
    />
)