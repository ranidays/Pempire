import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Container } from "../GlobalStylings";

const CombatScreen = () => {
  const [jwt, setJwt] = useState(null);

  const handleClick = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        "attack": "Att1"
      })
    };

    console.log(requestOptions.body);
    fetch("http://localhost:5000/api/combat/attack", requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  return <Container>
    <div
    style={{ color: "inherit", textDecoration: "inherit", cursor: "pointer" }}
    onClick={handleClick}>
      For now, this logs you in</div>
  </Container>
}

export default CombatScreen;