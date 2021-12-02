import {createGlobalStyle} from "styled-components";
import ArcadeClassic from '../src/fonts/ARCADECLASSIC.TTF'
import RumbleBrave from '../src/fonts/RumbleBrave.otf'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'ArcadeClassic';
    src: url(${ArcadeClassic})
  }

  @font-face {
    font-family: 'RumbleBrave';
    src: url(${RumbleBrave})
  }
`
export default FontStyles;
