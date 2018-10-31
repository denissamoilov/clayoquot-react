import React from "react"

import Header from "../components/header"
import Container from "../components/container"
import Slider from "../components/slider"
import TopimageSlide from "../components/topimage-slide"
import TopImages from "../components/topimages"

export default () => (
    <div>
        <Header />

        <TopImages>
            <Slider>
                <TopimageSlide
                    src="https://source.unsplash.com/random/1920x900"
                    caption="Pharetra Ridiculus Bibendum Cursus"
                    align="right"
                    valign="middle"
                />
            </Slider>
        </TopImages>
        
        <Container>
            <h1>Richard Hamming on Luck</h1>
            <div>
                <p>
                    From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">You and Your Research</a>”.
                </p>
                <blockquote>
                    <p>
                        There is indeed an element of luck, and no, there isn’t. The prepared mind sooner or later finds something important and does it. So yes, it is luck.{" "}
                        <em>
                            The particular thing you do is luck, but that you do something is not.
            </em>
                    </p>
                </blockquote>
            </div>
            <p>Posted April 09, 2011</p>
        </Container>
    </div>
)
