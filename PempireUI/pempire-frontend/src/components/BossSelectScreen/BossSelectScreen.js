import React, { useState, useEffect, useRef } from "react";
import {BossScreenContainer, Narrator, StoryTextBox, ButtonContainer, BossContainer, Boss, BossRow, Grid, ShopIcon, ShopIconContainer, NarratorContainer, StoryTextBoxContainer} from "./BossSelectStyling"
import {useNavigate } from "react-router-dom";
let waterPepe = "/assets/bosses/waterPepe.png"
let firePepe = "/assets/bosses/fireBoss.jpg"
let earthPepe = "/assets/bosses/rockPepe.png"
let grassPepe = "/assets/bosses/grassPepe.png"
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
    const handleClick = (prop) => {
        var actor = 0;
        switch (prop) {
            case 0:
                actor = 4
                break;
            case 1:
                actor = 6
                break;
            case 2:
                actor = 12
                break;
            case 3:
                actor = 10
                break;
            default:
                actor = -1
                break;
        }
        const bossSelectedOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'bearer ' + sessionStorage.getItem('jwtToken')
            },
            body: JSON.stringify({
                "Name": actor
            })
        };
        //console.log(buyRequestOptions.body);
        fetch("http://localhost:5000/api/GameLogic/BossSelected", bossSelectedOptions)
        .then(response => {
            navigate("/BattleActionSelection")
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        async function getJWT() {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                  "Email" : "a@c.com",
                  "Password" : "Password1!"
                  })
            };
            fetch('http://localhost:5000/api/authentication/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                sessionStorage.setItem('jwtToken', data.token);
            })
            .catch(error => {
                console.log("error: " + error);
            });
        }
        getJWT();
    },[])

    return (
        <BossScreenContainer>
            <Grid>
                <ShopIconContainer>
                    <ShopIcon onClick={() => handleShop()} src={shopImage}/>
                </ShopIconContainer>
                <BossRow>
                    <BossContainer onMouseEnter={() => handleEnter(0)} onClick={() => handleClick(0)}>
                        <Boss src={waterPepe}/>
                    </BossContainer>
                    <BossContainer onMouseEnter={() => handleEnter(1)} onClick={() => handleClick(1)}>
                        <Boss src={firePepe}/>
                    </BossContainer>
                    <BossContainer onMouseEnter={() => handleEnter(2)} onClick={() => handleClick(2)}>
                        <Boss src={earthPepe}/>
                    </BossContainer>
                    <BossContainer onMouseEnter={() => handleEnter(3)} onClick={() => handleClick(3)}>
                        <Boss src={grassPepe}/>
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