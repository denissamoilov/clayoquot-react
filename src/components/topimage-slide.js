import React from "react"

import slideStyles from "./css/topimage-slide.module.css"

const Slide = props => (

    // console.log('align: ', props.align)

    <figure className={slideStyles.slide} style={{backgroundImage: `url(${props.src})`}}>
        <img src={props.src} alt=""/>
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