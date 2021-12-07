import React from "react";
import {ShopContainer, ShopContent} from "./ShopStylings";
import {TextBox} from "../GlobalStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation"

const ShopScreen= () => {
    return(
        <ShopContainer>
            <ShopContent>
                <TextBoxWithAnimation stringToType={"Welcome traveler, may I interest you in any of my wares?"}/>
            </ShopContent>
        </ShopContainer>
    )
}

export default ShopScreen;