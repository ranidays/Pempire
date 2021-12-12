import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ElementType, findElementByElementType } from "../../elements";
import { findMoveByIdentifier, moves } from "../../moves";
import { Container } from "../GlobalStylings";
import MoveButton from "./MoveButton";

const CombatScreen = () => {
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
    fetch("http://localhost:5000/api/combat/attack", requestOptions)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
  }

  return <Container>
    <MoveButton onClick={handleClick}>Click Me!</MoveButton>
    <MoveButton onClick={handleClick}>Click Me!</MoveButton>
    <MoveButton onClick={handleClick}>Click Me!</MoveButton>
    <MoveButton onClick={handleClick}>Click Me!</MoveButton>
  </Container>
}

export default CombatScreen;