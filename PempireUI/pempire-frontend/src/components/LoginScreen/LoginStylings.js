import styled from "styled-components";
import {TextBox} from "../GlobalStylings";
let blueBg = "/assets/blue_background.png"
let bookTab = "/assets/book_savetab.png";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${blueBg}) no-repeat center center fixed;
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
  -ms-interpolation-mode: nearest-neighbor;   
  /* IE (non-standard property) */

  ${TextBox} {
    margin-top: 2%;
  }
`
export const LeftContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;         
  image-rendering: -o-crisp-edges;
`

export const RightContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
`

export const FormInputFieldContainer = styled.form`
 
  transform: translateX(62%) translateY(-130%);
  z-index: 1;
`

export const BookWithHand = styled.img`
  display: flex;
  width: 47%;
  position: fixed; 
  bottom: 0; 
  right: 0;
  margin-right: 8%;
`

export const Narrator = styled.img`
  height: 80vh;
  position: fixed; 
  bottom: 0; 
  left: 0;
`

export const InputField = styled.input`
  background-color: white;
  width: 400px;
  height: 35px;
  border-radius: 10px;
  margin-bottom: 25px;
  padding-left: 1%;
  z-index:1;
  align-self: center;
`

export const CustomButton = styled.button`
  font-family: 'ArcadeClassic', serif ;
  color: white;
  background: transparent;
  border-radius: 10px;
  z-index: 1;
  width: 30%;
  align-self: flex-end;
  margin-bottom: 25px;
  padding-left: 1%;
  transform: translateX(12%) translateY(-140%);
  height: 50px;
  font-size: 35px;

`

export const Header = styled.h1`
  position: absolute;
  bottom: 74%;
  font-family: 'ArcadeClassic', serif ;
  color: white;
`


export const SaveTab= styled.button`
  width: 10%;
  height: 10%;
  position: fixed;
  background-image: url(${bookTab});
  border-width: 1px;
  color: white;
  text-align: left;
`
