import React from "react"
import headerStyles from "./css/header.module.css"

export default () => (
    <header className={headerStyles.header}>
        <a className={headerStyles.logo} href="index.js">Logo</a>
    </header>
)