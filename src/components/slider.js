import React from "react"
import sliderStyles from "./css/slider.module.css"

export default ({ children }) => (
    <div className={sliderStyles.slideshow}>
        <div className={sliderStyles.slideshowWrapper}>
            {children}
        </div>
    </div>
)