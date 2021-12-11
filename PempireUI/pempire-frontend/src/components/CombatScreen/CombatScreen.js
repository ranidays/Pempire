import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Container } from "../GlobalStylings";

const CombatScreen = () => {
  const [jwt, setJwt] = useState(null);

  const handleClick = () => {
    const requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        "Email" : "a@c.com",
        "Password" : "Password1!"
      })
    };

    fetch("http://localhost:5000/api/authentication/login", requestOptions)
    .then(response => response.json())
    .then(data => {
      if (jwt === null) setJwt(data.token);
      else alert(jwt);
      console.log(`Successfully set ${data.token} as JWT!`);
    });
  }

  return <Container>
    <div
    style={{ color: "inherit", textDecoration: "inherit", cursor: "pointer" }}
    onClick={handleClick}>
      For now, this logs you in</div>
  </Container>
}

export default CombatScreen;