import React from "react"
import Slider from "../components/slider"
import TopImagesStyles from "./css/topimages.module.css"

const buildSlides = imgs => {
    console.log('images: ', imgs)
    return imgs.map((image) => (
        <figure className={TopImagesStyles.slide} style={{backgroundImage: `url(${image.top_image.url})`}}>
            <img className={TopImagesStyles.img} src={image.top_image.url} alt=""/>
            <figcaption className={`${image.position} ${TopImagesStyles.caption}`}>
                <div className={TopImagesStyles.wrapper}>
                    <strong className={TopImagesStyles.strong} dangerouslySetInnerHTML={{ __html: image.marketing_message.text }} />
                    <span className={TopImagesStyles.small} dangerouslySetInnerHTML={{ __html: image.marketing_message_2.text }} />
                </div>
            </figcaption>
        </figure>
        // <TopimageSlide
        //     key={index}
        //     src={image.url}
        //     caption="Pharetra Ridiculus Bibendum Cursus"
        //     align="right"
        //     valign="middle"
        // />
    ));
}

export default ({images}) => {
    return (
        <div className={TopImagesStyles.topimages}>
            <Slider>
                {/* {children} */}
                {buildSlides(images)}
            </Slider>
        </div>
    )
}