import {createGlobalStyle} from "styled-components";
import ArcadeClassic from '../src/fonts/ARCADECLASSIC.TTF'
import RumbleBrave from '../src/fonts/RumbleBrave.otf'

const FontStyles = createGlobalStyle`
  /*custom pixel font*/
  @font-face {
    font-family: 'PixelFont';
    src: local('Minecraft'), url(./fonts/Minecraft.ttf) format('truetype');
    letter-spacing: 0.3em;
  }

  @font-face {
    font-family: 'RumbleBrave';
    src: url(${RumbleBrave})
  }
`
export default FontStyles;
