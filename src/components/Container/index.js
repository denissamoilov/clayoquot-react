import React from "react";
import mainWrapperStyles from "./styles/container.module.css";

export default({children}) => (
    <div className={mainWrapperStyles.wrapper}>{children}</div>
)