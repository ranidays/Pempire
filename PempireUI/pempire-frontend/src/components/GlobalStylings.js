import styled, { keyframes } from "styled-components";
import b from "../assets/blue_background.png"
import pixelBorder from "../assets/pixel_border.png"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${b}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */ 
  /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
`

export const TitleImg = styled.img`
  width: 47%;
  height: auto;
  display: flex;
  padding-top: 15%;
`


export const BookWithHand = styled.img`
  width: 47%;
  height: auto;
  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: pixelated;
  -ms-interpolation-mode: nearest-neighbor;
  position: fixed; 
  bottom: 0px; 
  right: 0px;
  margin-right: 9%;
`

export const Narrator = styled.img`
  width: 40%;
  height: auto;
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
  padding: 1.2em;
  font-family: 'PixelFont';
  letter-spacing: 0.3em;
  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: pixelated;
  -ms-interpolation-mode: nearest-neighbor;  
`

//code retrieved and modified from https://codepen.io/YoannM/pen/yyExEO?editors=0100
//not working; background color not showing at most zoom levels.
export const PixelButton = styled.div`

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


  cursor: pointer;
  text-transform: uppercase;

  position: relative;
  display: inline-block;
  vertical-align: top;
  text-align: center;

  & p{
    font-family: 'PixelFont';
    color: #FFFFFF;

  display: inline-block;
  vertical-align: top;
  position: relative;
  width: auto;
  text-align: center;
  margin: -20px -20px;
  line-height: 1.5em;
  padding: 10px 40px;
  font-size: 2em;
  
	background: #000000;
	background:
		linear-gradient(135deg, transparent 10px, #000000 0) top left,
		linear-gradient(225deg, transparent 10px, #000000 0) top right,
		linear-gradient(315deg, transparent 10px, #000000 0) bottom right,
		linear-gradient(45deg,  transparent 10px, #000000 0) bottom left;
	background-size: 50% 50%;
	background-repeat: no-repeat;
	background-image:
		radial-gradient(circle at 0 0, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 100% 0, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 100% 100%, rgba(204,0,0,0) 14px, #000000 15px),
		radial-gradient(circle at 0 100%, rgba(204,0,0,0) 14px, #000000 15px);

  }

  &:active{
    top: 2px;
  }
`