import styled from "styled-components";
import { PixelButton, TextBox } from "../GlobalStylings";

let blueBg = "/assets/blue_background.png";
const sheetImg = "/assets/characterselect_paper_hand.png";


export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${blueBg}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */ 
  /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;   
  /* IE (non-standard property) */
  box-sizing: border-box;
  padding: 0% 5%;
`
export const LeftContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  gap: 5%;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;         
  image-rendering: -o-crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; 
  ${TextBox} {
        font-size: 1.3vw;
        align-self: stretch;
        flex-grow: 1;
    }
    box-sizing: border-box;
    padding-top: 5%;
`

export const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; 
  box-sizing: border-box;
  padding-top: 5%;
`

export const CharacterSheet = styled.div`
  justify-self: flex-end;
  flex-grow: 2;
  background: url(${sheetImg}) no-repeat bottom;
  background-size: contain;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  box-sizing: border-box;
  padding: 5%; 
  padding-left: 11%;
  gap: 2%;
  ${PixelButton} {
    margin-top: 5%;
  }
`

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    width: 100%;
    justify-content: space-evenly;
    image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; 
`


export const HeroImage = styled.img`
    border: 0px;
    image-rendering: crisp-edges;
    height: 100%;
    image-rendering: -moz-crisp-edges;          /* Firefox */
    image-rendering: -o-crisp-edges;            /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
    aspect-ratio: 1;
`

export const Narrator = styled.img`
  flex-grow: 4;
  align-self: flex-start;
  aspect-ratio: 1;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */ 
  /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor; 
`

export const Header = styled.h1`
  font-family: 'PixelFont' ;
  color: black;
`

export const Description = styled.p`
    font-family: 'PixelFont';
    color: black;
`
