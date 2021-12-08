import React from "react";
import {ShopContainer, ShopContent, ItemStore, Item} from "./ShopStylings";
import {TextBox} from "../GlobalStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation"

const ShopScreen= () => {

    const fs = require('fs');
    const folder = "../../assets/shop_items"

    function getShopItems() {

    }


    return(
        <ShopContainer>
            <ShopContent>
                <TextBoxWithAnimation stringToType={"Welcome traveler, may I interest you in any of my wares?"}/>
                <ItemStore>
                    <Item image={"mana_small.png"}></Item>
                </ItemStore>
            </ShopContent>
        </ShopContainer>
    )
}

export default ShopScreen;