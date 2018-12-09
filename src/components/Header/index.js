import React from "react"
import Container from "../Container"

import headerStyles from "./styles/header.module.css"
import logo from "../../images/logo.svg"


export default () => (
    <header className={headerStyles.header}>
        <Container>
            <a className={headerStyles.logo} href="index.js">
                <img src={logo} alt="Logo" />
            </a>
        </Container>
    </header>
)