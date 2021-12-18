import React, { useState, useEffect, useRef } from "react";
import {BossScreenContainer, Narrator, StoryTextBox, ButtonContainer, BossContainer, Boss, BossRow, Grid, ShopIcon, ShopIconContainer, NarratorContainer, StoryTextBoxContainer} from "./BossSelectStyling"
import {useNavigate } from "react-router-dom";
let waterPepe = "/assets/bosses/waterPepe.png"
let shopImage = "/assets/shopIcon.png"
let narrator = "/assets/narrator.png";



function BossSelectScreen(props) {
    const navigate = useNavigate()
    const StoryText = [
        "water pepe description",
        "fire pepe description",
        "earth pepe description",
        "normal pepe description"
    ]
    const [bossDescriptions, setbossDescriptions] = useState({
        description: "some fake description"
    })
    const handleEnter = (prop) => {
        let newState = {...bossDescriptions};
        newState.description = StoryText[prop]
        setbossDescriptions(newState)
    }
    const handleShop = () => {
        navigate("/shop")
    }
    const handleClick = () => {
        
    }

    return (
        <BossScreenContainer>
            <Grid>
                <ShopIconContainer>
                    <ShopIcon onClick={() => handleShop()} src={shopImage}/>
                </ShopIconContainer>
                <BossRow>
                    <BossContainer onMouseEnter={() => handleEnter(0)}>
                        <Boss src={waterPepe}/>
                    </BossContainer>
                    <BossContainer onMouseEnter={() => handleEnter(1)}>
                        <Boss src={waterPepe}/>
                    </BossContainer>
                    <BossContainer onMouseEnter={() => handleEnter(2)}>
                        <Boss src={waterPepe}/>
                    </BossContainer>
                    <BossContainer onMouseEnter={() => handleEnter(3)}>
                        <Boss src={waterPepe}/>
                    </BossContainer>
                </BossRow>
                <NarratorContainer>
                    <Narrator src={narrator}/>
                </NarratorContainer>
                <StoryTextBoxContainer>
                    <StoryTextBox key={bossDescriptions.description} stringToType={bossDescriptions.description}/>
                </StoryTextBoxContainer>
            </Grid>
        </BossScreenContainer>
    );
}

export default BossSelectScreen