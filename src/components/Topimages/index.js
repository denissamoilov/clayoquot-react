import React from "react"
import Swiper from 'react-id-swiper';
import TopImagesStyles from "./styles/topimages.module.css"

const buildSlides = imgs => {
    return imgs.map((image, index) => (
        <figure key={index} className={TopImagesStyles.slide} style={{backgroundImage: `url(${image.top_image.url})`}}>
            <img className={TopImagesStyles.img} src={image.top_image.url} alt=""/>
            <figcaption className={`${image.message_valign} ${image.message_align} ${TopImagesStyles.caption}`}>
                <div className={TopImagesStyles.wrapper} dangerouslySetInnerHTML={{ __html: image.marketing_message.html }} />
            </figcaption>
        </figure>
    ));
}

class TopImagesComponent extends React.Component {
    constructor(props) {
        super(props)
        this.goNext = this.goNext.bind(this)
        this.goPrev = this.goPrev.bind(this)
        this.swiper = null
    }

    goNext() {
        if (this.swiper) this.swiper.slideNext()
    }

    goPrev() {
        if (this.swiper) this.swiper.slidePrev()
    }

    render() {
        const params = {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        }
    
        return (
            <div className={TopImagesStyles.topimages}>
                <Swiper {...params}>
                    {/* {children} */}
                    {buildSlides(this.props.images)}
                </Swiper>
            </div>
        )
    }
}

TopImagesComponent.defaultProps = {};

export default TopImagesComponent