import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "../GlobalStylings";

const CombatScreen = () => 
  <Container>
    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Alright, let's head back</Link>
  </Container>

export default CombatScreen;