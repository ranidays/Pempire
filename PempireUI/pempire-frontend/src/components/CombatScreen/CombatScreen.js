import React, { useState } from "react";
import { ElementType, findElementByElementType } from "../../elements";
import { findMoveByIdentifier, moves } from "../../moves";
import { CombatOptionButton, CombatContainer, CombatOptions, MoveDisplay, MoveTypeDisplay } from "./CombatStylings";
import "./CombatScreen.css"

const CombatScreen = (props) => {
  //DEBUGGING
  const defaultButtonText = "Click Me";
  const numButtons = 4;
  const testMoves = [moves[0], moves[1], moves[2], moves[3]];
  const [jwt, setJwt] = useState(null);

  const handleClick = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        "battlemove": findMoveByIdentifier("Att1").enumeration,
        "foeelement": findElementByElementType(ElementType.WATER).enumeration
      })
    };

    console.log(requestOptions.body);
    fetch("http://localhost:5000/api/combat/battleaction", requestOptions)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
  }

  return <CombatContainer>
    <CombatOptions>
      <MoveDisplay>
        {Array(4).fill(null).map(_ =>
          <CombatOptionButton onClick={handleClick}>{defaultButtonText}</CombatOptionButton>
        )}
      </MoveDisplay>
      <MoveTypeDisplay>
        {Array(4).fill(null).map(_ =>
          <CombatOptionButton onClick={handleClick}>{defaultButtonText}</CombatOptionButton>
        )}
      </MoveTypeDisplay>
    </CombatOptions>
  </CombatContainer>
}

export default CombatScreen;