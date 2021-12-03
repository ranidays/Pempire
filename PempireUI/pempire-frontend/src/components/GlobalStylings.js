import styled from "styled-components";
import b from "../assets/blue_background.png"

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
