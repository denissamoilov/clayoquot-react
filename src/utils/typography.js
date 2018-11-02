import Typography from "typography"
import { normalize } from "path";

const typography = new Typography({
    googleFonts: [{
            name: 'EB Garamond',
            styles: [
                '500',
            ],
        },
        {
            name: 'Roboto',
            styles: [
                '400',
                '400i',
                '700',
                '700i',
            ],
        },
    ],
    baseFontSize: "16px",
    baseLineHeight: 1.45,
    title: [ "EB Garamond", "Georgia", "serif"],
    headerFontFamily: [ "EB Garamond", "Georgia", "serif"],
    headerWeight: "normal",
    bodyFontFamily: [ "EB Garamond", "Georgia", "serif"],
    blockMarginBottom: "2vw"
})

export default typography