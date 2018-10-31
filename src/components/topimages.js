import React from "react"
import TopImagesStyles from "./css/topimages.module.css"


export default ({children}) => (
    <div className={TopImagesStyles.topimages}>{children}</div>
)