import React, { useState } from "react";
import { ElementType, findElementByElementType } from "../../elements";
import { findMoveByIdentifier, moves } from "../../moves";
import { CombatContainer } from "./CombatStylings";
import { CombatOptions, MoveTypeDisplay, MoveDisplay, CombatOptionButton, BackButton, CombatProfile } from "./CombatComponents";

const CombatScreen = (props) => {
  const numButtons = 4;
  const selectedMoves = moves.slice(0, 4);
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
    <div className="user-display">
      <CombatProfile />
      <BackButton />
    </div>
    <CombatOptions>
      <MoveDisplay>
        {selectedMoves.map(x =>
          <CombatOptionButton onClick={handleClick}>{x.name}</CombatOptionButton>
        )}
      </MoveDisplay>
      <MoveTypeDisplay>
        {selectedMoves.map(x =>
          <CombatOptionButton onClick={handleClick}>{x.name}</CombatOptionButton>
        )}
      </MoveTypeDisplay>
    </CombatOptions>
  </CombatContainer>
}

export default CombatScreen;