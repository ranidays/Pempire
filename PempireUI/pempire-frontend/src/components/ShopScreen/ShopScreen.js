import React, { useState, useEffect } from "react";
import {ShopContainer, ShopContent, ItemStore, Item, ShopButtonContainer, ItemImage, GoldContainer, GoldIcon, GoldDisplay, GoldInnerContainer} from "./ShopStylings";
import {PixelButton} from "../GlobalStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation"
let coin = "/assets/shop_items/coin.png"
let redCoin = "/assets/shop_items/red_coin.png"

function ShopScreen(props) {

    //stateless variables
    const prefix = "/assets/shop_items/";
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    //stateful variables
    const [selectedItem, setSelectedItem] = useState(-1);
    const [items, setItems] = useState([]); //empty list of objects to hold items
    const [gold, setGold] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [showCost, setShowCost] = useState(false);
    const [itemKeys, setItemKeys] = useState([]);

    //componentDidMount
    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('http://localhost:5000/api/shop/getitems', requestOptions);
            const json = await response.json();
            setItems(json);
            console.log(`fetchitems: ${JSON.stringify(json)}`);
        }
        async function fetchGold() {
            const response = await fetch('http://localhost:5000/api/shop/getusergold', requestOptions);
            const json = await response.json();
            setGold(json);
            console.log(`fetchgold: ${json}`);
        }
        async function fetchItemKeys() {
            const response = await fetch('http://localhost:5000/api/shop/getitemkeys', requestOptions);
            const json = await response.json();
            setItemKeys(json);
            console.log(`itemkeys: ${json}`);
        }
        fetchItems();
        fetchGold();
        fetchItemKeys();
    }, [])

    //componentDidUpdate
    useEffect(() => {
        setDisabled(selectedItem == -1 || gold < items[selectedItem].goldCost);
        setShowCost(selectedItem != -1);
    })


    //methods
    const selectItem = (index) => {
        console.log(`selected item before click: ${selectedItem}`);
        setSelectedItem(selectedItem === index ? -1 : index);
        console.log(`selected item: ${selectedItem}`);
        console.log(`index of clicked: ${index}`);
    }

    const buyItem = () => {
        console.log("buying item");
        //TODO: 
    }

    //rendering:
    const renderGoldCost = () => {
        if (showCost) {
            return (
                <GoldInnerContainer>
                    <GoldDisplay>Cost: </GoldDisplay>
                    <GoldIcon src={redCoin}></GoldIcon>
                    <GoldDisplay style={{ color: "red" }}>-{items[selectedItem].goldCost}</GoldDisplay>
                </GoldInnerContainer>
            );
        } else {
            return (null);
        }
    }

    return (
        <ShopContainer>
            <ShopContent>
                <TextBoxWithAnimation stringToType={"Welcome traveler, may I interest you in any of my wares?"} />
                <ItemStore>
                    {/*instead of array of bg to loop through and match, set a class on component
                for any component that doesn't match selected item, set class to false (or not at all?)
                for component matching selected,toggle class (if it is selected, deselect, if deselected, select) */}
                    {items.map((item, index) => (
                        <Item key={itemKeys[index]} selected={index == selectedItem}>
                            <ItemImage src={`${prefix}` + `${item.iconUrl}`} onClick={() => selectItem(index)}></ItemImage>
                        </Item>
                    ))
                    }
                </ItemStore>
                <GoldContainer>
                    {renderGoldCost()}
                    <GoldInnerContainer
                        style={!showCost ? { marginLeft: "auto" } : {}}
                    >
                        <GoldIcon src={coin}></GoldIcon>
                        <GoldDisplay
                            style={showCost && disabled ? { color: "red" } : {}}
                        >{gold}</GoldDisplay>
                    </GoldInnerContainer>
                </GoldContainer>
                <ShopButtonContainer>
                    <PixelButton>
                        <p>Back</p>
                    </PixelButton>
                    <PixelButton style={disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}
                        onClick={buyItem}
                    >
                        <p>Buy</p>
                    </PixelButton>
                </ShopButtonContainer>
            </ShopContent>
        </ShopContainer>
    )
}

export default ShopScreen;