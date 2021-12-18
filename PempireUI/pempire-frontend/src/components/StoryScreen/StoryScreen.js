import React, { useState, useEffect, useRef } from "react";
import TextBoxWithAnimation from "../TextBoxWithAnimation";
import {StoryContainer, Narrator, StoryTextBox, ButtonContainer} from "./StoryScreenStylings"
import { TextBox} from "../GlobalStylings";
import { Link } from "react-router-dom";
import {InputField, CustomButton, Header} from "./StoryScreenStylings";
import {useNavigate } from "react-router-dom";

let narrator = "/assets/narrator.png";



function StoryScreen(props) {
  const navigate = useNavigate()
  const StoryText = [
    "They were ruled by the benevolent Pemperor, Pepe IV, using his Maguffin staff to keep the Chaotic Pepe energies at bay.",
    "However one day the Pemperor's most trusted advisor, Trumpepe, decided they want the power of the amighty Maguffin staff for themselves! ",
    "They decided to betray the Pemperor, They arranged a meeting to discuss the Pempires finances when they all attacked the pemperor and stole his Staff.",
    "Their plan worked flawlessly and soon they had taken over the pempire, however they didn't realise the power of the staff, and in their attempt to harness it's powers, the broke it into pieces.",
    "Now the land is filled with chaotic demon's and the pepe people have lost all hope.",
    "However the Pemperor's children managed to escape! They have decided that they'll fight to take back their Pempire and defeat Trumpepe and his evil compatriots!",
    "END"
  ]
  const [beingSaid, setbeingSaid] = useState({
    Narration: "The Pempire had always been a peaceful land, filled with frollicking pepe's living in harmony.",
    Index: 0
  })
  const handleClick = (props) => {
    let newState = {...beingSaid};
    newState.Narration = StoryText[beingSaid.Index]
    newState.Index = beingSaid.Index + 1
    setbeingSaid(newState)
  }
  
  useEffect(() => {
    if (beingSaid.Index == 6){
      navigate("/login")
    }
}, [beingSaid.Index])

    return (
        <StoryContainer>
          <Narrator src={narrator}/>
          <StoryTextBox key={beingSaid.Narration} stringToType={beingSaid.Narration}/>
          <ButtonContainer>
            <CustomButton onClick={() => handleClick()}>Next</CustomButton>
          </ButtonContainer>
        </StoryContainer>
    );
}

export default StoryScreen;