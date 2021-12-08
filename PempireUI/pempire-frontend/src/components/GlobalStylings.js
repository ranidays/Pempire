import styled, { keyframes } from "styled-components";
import b from "../assets/blue_background.png"
import pixelBorder from "../assets/pixel_border.png"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${b});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  overflow: hidden;
  position: relative;
`

export const TitleImg = styled.img`
  width: 47%;
  height: auto;
  display: flex;
  padding: 2%;
`


export const BookWithHand = styled.img`
  width: 47%;
  height: auto;
  //display: flex;
  //align-items: flex-end;

  position: fixed; 
  bottom: 0px; 
  right: 0px;
  margin-right: 5%;
  
  
  
`

export const Narrator = styled.img`
  width: 40%;
  height: auto;
  //display: flex;
  //align-items: flex-end;

  position: fixed; 
  bottom: 0px; 
  left: 0px;
`

export const TextBox = styled.div`
  background: #000000;
  border: 2px solid #FFFFFF;
  position: relative;
  outline: 5px solid #000000;
  color: #FFFFFF;
  padding: 10px;
  font-family: 'PixelFont';
  letter-spacing: 2px;
`

//code retrieved and modified from https://codepen.io/YoannM/pen/yyExEO?editors=0100
export const PixelButton = styled.div`
  background-color: #000000;
  background-clip: padding-box;

  line-height: 0;

  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */

  border-style: solid;
  border-width: 20px;
  -moz-border-image: url(${pixelBorder}) 20 stretch;
  -webkit-border-image: url(${pixelBorder}) 20 stretch;
  -o-border-image: url(${pixelBorder}) 20 stretch;
  border-image: url(${pixelBorder}) 20 stretch;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  text-transform: uppercase;

  position: relative;
  display: inline-block;

  & p{
    margin: 0;
    padding: 0;
    font-family: 'PixelFont';
    color: #FFFFFF;
  }

  &:active{
    top: 2px;
  }
`