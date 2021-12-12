import React, { useState, useEffect } from "react";
import {ShopContainer, ShopContent, ItemStore, Item, ShopButtonContainer, ItemImage, GoldContainer, GoldIcon, GoldDisplay, GoldInnerContainer} from "./ShopStylings";
import {PixelButton} from "../GlobalStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation"
let coin = "/assets/shop_items/coin.png"
let redCoin = "/assets/shop_items/red_coin.png"

function GoldInfo(props){
    if (!props.showCost){
        return(
            <GoldContainer>
                <GoldInnerContainer style={{ marginLeft: "auto" }}>
                    <GoldIcon src={coin}></GoldIcon>
                    <GoldDisplay>{props.gold}</GoldDisplay>
                </GoldInnerContainer>
            </GoldContainer>
        );
    } else {
        return(
            <GoldContainer>
                <GoldInnerContainer>
                    <GoldDisplay>Cost: </GoldDisplay>
                    <GoldIcon src={redCoin}></GoldIcon>
                    <GoldDisplay style={{ color: "red" }}>-{props.cost}</GoldDisplay>
                </GoldInnerContainer>
                <GoldInnerContainer>
                    <GoldIcon src={coin}></GoldIcon>
                    <GoldDisplay style={props.disabled ? { color: "red" } : {}}>{props.gold}</GoldDisplay>
                </GoldInnerContainer>
            </GoldContainer>
        );
    }
}

function ItemDisplay(props) {
    if (props.selected){
        return(
            <Item selected onClick={props.onChildClick}>
                <ItemImage src={props.imgSrc} ></ItemImage>
            </Item>
        );
    } else {
        return(
            <Item>
                <ItemImage src={props.imgSrc} onClick={props.onChildClick}></ItemImage>
            </Item>
        );
    }
}

function ShopkeepSays(props) {
    if (props.shopkeepSays === undefined){
        return(
            <TextBoxWithAnimation stringToType="Welcome traveler, may I interest you in any of my wares?"/>
        );
    } else {
        return(
            <TextBoxWithAnimation stringToType={props.shopkeepSays}/>
        );
    }
}

function ShopScreen(props) {

    //stateless variables
    const prefix = "/assets/shop_items/";
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    //stateful variables
    const [items, setItems] = useState([]); //empty list of objects to hold items
    const [gold, setGold] = useState(0);
    const [itemKeys, setItemKeys] = useState([]);
    const [UIState, setUIState] = useState({
        selectedItem: -1,
        disabled: true,
        showCost: false,
        shopkeepSays: "Welcome traveler, may I interest you in any of my wares?"
    })

    //componentDidMount
    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('http://localhost:5000/api/shop/getitems', requestOptions);
            const json = await response.json();
            setItems(json);
            
        }
        async function fetchGold() {
            const response = await fetch('http://localhost:5000/api/shop/getusergold', requestOptions);
            const json = await response.json();
            setGold(json);

        }
        async function fetchItemKeys() {
            const response = await fetch('http://localhost:5000/api/shop/getitemkeys', requestOptions);
            const json = await response.json();
            setItemKeys(json);

        }
        fetchItems();
        fetchGold();
        fetchItemKeys();
    }, [])

    //componentDidUpdate
    useEffect(() => {
        //console.log("component did update")
    })


    //methods
    const selectItem = (index) => {
        let newState = {...UIState};

        if (newState.selectedItem == index){
            newState.selectedItem = -1;
            newState.disabled = true;
            newState.showCost = false;
            newState.shopkeepSays = "Anything catch your fancy, dear travler?";
        } else {
            newState.selectedItem = index;
            newState.disabled = items[index].goldCost > gold;
            newState.showCost = true;
            newState.shopkeepSays = `Ahh yes, the ${items[index].name}. ${items[index].description}.`;
        }
        setUIState(newState);
    }

    const buyItem = () => {
        console.log("buying item");
        //TODO: 
        //send post request with cost and item to add

        const buyRequestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "itemtoadd": itemKeys[UIState.selectedItem],
                "cost": items[UIState.selectedItem].goldCost
            })
        };

        fetch("http://localhost:5000/api/shop/updateinventory", buyRequestOptions)
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err));
    }

    return (
        <ShopContainer>
            <ShopContent>
                <ShopkeepSays key={UIState.shopkeepSays} shopkeepSays={`${UIState.shopkeepSays}`} />
                <ItemStore>
                    {items.map((item, index) => (
                        <ItemDisplay key={index} onChildClick={() => selectItem(index)} imgSrc={`${prefix}` + `${item.iconUrl}`} selected={index == UIState.selectedItem}/>
                    ))
                    }
                </ItemStore>
                <GoldInfo gold={gold} disabled={UIState.disabled} showCost={UIState.showCost} cost={UIState.selectedItem == -1 ? 0 : items[UIState.selectedItem].goldCost}/>
                <ShopButtonContainer>
                    <PixelButton>
                        <p>Back</p>
                    </PixelButton>
                    <PixelButton style={UIState.disabled ? { pointerEvents: "none", opacity: "0.4" } : {}} onClick={() => buyItem()}>
                        <p>Buy</p>
                    </PixelButton>
                </ShopButtonContainer>
            </ShopContent>
        </ShopContainer>
    );
}



export default ShopScreen;