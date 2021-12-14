import styled from "styled-components";
import React from "react"
import { TextBox } from "../GlobalStylings";

const itemSize = "5vw";
let b = "/assets/shop_background_pepe.png";

export const ShopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${b});
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
  background-size: cover;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  image-rendering: optimizeSpeed;
  image-rendering: crisp-edges;
 image-rendering: -moz-crisp-edges;          /* Firefox */
 image-rendering: -o-crisp-edges;            /* Opera */
 image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
 -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
`

export const ShopContent = styled.div`
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-right: 10%;
    gap: 3%;
    ${TextBox} {
        font-size: 1.3vw;
        align-self: stretch;
    }
`

export const ItemStore = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fill, ${itemSize});
    grid-template-rows: repeat(auto-fill,1fr);
    justify-items: center;
    justify-content: center;
    grid-column-gap: calc(${itemSize} / 2);
    background-color: #5b2e29c2;
    border: Cornsilk 2px solid;
    outline: #5b2e29 5px solid;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    padding: 10px;
`

export const Item = styled.div`
    border: 0;
    padding: 10px;
    margin: 0;
    background-color: ${props => props.selected? "#00000085" : "transparent"};

    min-width: ${itemSize};
    min-height: ${itemSize};

    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-content: center;

    &:active{
        background-color: #3a697ed1;
    }
`
export const ItemImage = styled.img`
    border: 0px;
    image-rendering: crisp-edges;
    width: 100%;
    height: 100%;
    image-rendering: -moz-crisp-edges;          /* Firefox */
    image-rendering: -o-crisp-edges;            /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
    aspect-ratio: 1;

`

export const ShopButtonContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 10%;
    justify-content: center;

`

export const GoldContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 3vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10%;
    align-content: center;
    justify-items: center;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;  
    background-color: #00000090;
`

export const GoldInnerContainer = styled.div`
    display: table;
`

export const GoldIcon = styled.img`
    border: 0;
    margin: 0 ;
    margin-right: 0.5em;
    margin-left: 1em;
    padding: 0;
    image-rendering: crisp-edges;
    width: 5vh;
    height: 5vh;
    image-rendering: -moz-crisp-edges;          /* Firefox */
    image-rendering: -o-crisp-edges;            /* Opera */
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
    aspect-ratio: 1;
`

export const GoldDisplay = styled.p`
    font-family: 'PixelFont';
    font-size: 5vh;
    margin: 0;
    padding: 0;
    border: 0;
    color: white;
    position: relative;
    top: 1px;
    display: table-cell;
    vertical-align: middle;
`
