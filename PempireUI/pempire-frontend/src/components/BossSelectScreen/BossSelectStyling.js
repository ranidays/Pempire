import styled from "styled-components";
import {TextBox} from "../GlobalStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation";
let b = "/assets/blue_background.png"


export const BossScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: url(${b}) no-repeat center center fixed;
  background-size: cover;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */ 
  -ms-interpolation-mode: nearest-neighbor;   
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 0.6fr 0.2fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
    "none none shop"
    "boss boss boss"
    "narrator text text"
`
export const Narrator = styled.img`
    height: 30vh;
    image-rendering: crisp-edges;
    image-rendering: -moz-crisp-edges;          /* Firefox */
    image-rendering: -o-crisp-edges;            /* Opera */ 
`
export const NarratorContainer = styled.div`
  grid-area: narrator;           /* Opera */ 
`
export const Boss = styled.img`
    height: 33vh;
    width: 20vw;
    padding: 25px;
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
export const BossContainer = styled.div`

display: flex;
justify-content: center
`
export const BossRow = styled.div`
    height: 100%;
    display: flex;
    direction: row;
    grid-area: boss;
`
export const ShopIcon = styled.img`
    flex: 1
    height: auto;
    width: 10vw;
    image-rendering: crisp-edges;
    image-rendering: -moz-crisp-edges;          /* Firefox */
    image-rendering: -o-crisp-edges;
`
export const ShopIconContainer = styled.div`
    grid-area: shop;
`
export const StoryTextBox = styled(TextBoxWithAnimation)`
`
export const StoryTextBoxContainer = styled.div`
    grid-area: text;
    ${TextBox} {
    font-size: 20px;
    width: 70vw;
    height: 20vh;
  }
`

