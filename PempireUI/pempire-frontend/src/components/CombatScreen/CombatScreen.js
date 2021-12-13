import React, { useState } from "react";
import { ElementType, findElementByElementType } from "../../elements";
import { findMoveByIdentifier, moves } from "../../moves";
import { MoveButton, CombatContainer } from "./CombatStylings";
import "./CombatScreen.css"

const CombatScreen = (props) => {
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
    <MoveButton onClick={handleClick}>Click Me!</MoveButton>
    <MoveButton onClick={handleClick}>Click Me!</MoveButton>
    <MoveButton onClick={handleClick}>Click Me!</MoveButton>
    <MoveButton onClick={handleClick}>Click Me!</MoveButton>
  </CombatContainer>
}

export default CombatScreen;