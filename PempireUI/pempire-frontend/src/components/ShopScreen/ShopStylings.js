import styled from "styled-components";
import React from "react"
import b from "../../assets/shop_background_pepe.png"
import { TextBox } from "../GlobalStylings";
import healthSmall from "../../assets/shop_items/health_small.png"
import healthMedium from "../../assets/shop_items/health_medium.png"
import healthLarge from "../../assets/shop_items/health_large.png"
import manaSmall from "../../assets/shop_items/mana_small.png"
import manaLarge from "../../assets/shop_items/mana_large.png"
import manaMedium from "../../assets/shop_items/mana_medium.png"

const itemSize = "6vw";

export const ShopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${b});
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
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
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    margin-right: 10%;
    gap: 10px;
    ${TextBox} {
        font-size: 1.3vw;
        align-self: stretch;
    }
`

export const ItemStore = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, ${itemSize});
    grid-template-rows: repeat(auto-fill, ${itemSize});
    justify-items: center;
    justify-content: center;
    grid-gap: 20px;
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
    background-color: transparent;

    min-width: ${itemSize};
    min-height: ${itemSize};

    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-content: center;

    &:active{
        background-color: #000000d1;
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
