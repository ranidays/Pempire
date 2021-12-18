import styled from "styled-components";
import {TextBox} from "../GlobalStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation";
let b = "/assets/blue_background.png"


export const StoryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${b}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: Top;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */ 
  /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;   
  /* IE (non-standard property) */

  ${TextBox} {
    font-size: 20px;
    width: 35vw;
    height: 10vh;
  }
`
export const Narrator = styled.img`
  height: 80vh;
  position: fixed; 
  bottom: 0; 
  left: 0;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */ 
`
export const CustomButton = styled.button`
  align-self: flex-end
  transform: translateY(-540%);
  font-family: 'ArcadeClassic', serif ;
  color: black;
  font-size: 50px;
  //margin-bottom: 7%;
  //margin-top: -3%;
  width: 10%;
  border-radius: 10px;

`
export const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const StoryTextBox = styled(TextBoxWithAnimation)`
`

