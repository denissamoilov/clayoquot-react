import React from "react";
import mainWrapperStyles from "./css/container.module.css";

export default({children}) => (
    <div className={mainWrapperStyles.wrapper}>{children}</div>
)