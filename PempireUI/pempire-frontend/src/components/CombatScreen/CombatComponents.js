import React, { useState } from "react";
import { CombatProfileSC, AvatarSC, CombatInfoSC } from "./CombatStylings";

export const CombatProfile = (props) => {
  return <CombatProfileSC>
    <AvatarSC />
    <CombatInfo {...props} />
  </CombatProfileSC>
};

const CombatInfo = (props) => {
  const entityInfo = {
    health: props.health,
    mana: props.mana,
    statusConditions: []
  };

  return <CombatInfoSC>
    <p>Health: {entityInfo.health}</p>
    <p>Mana: {entityInfo.mana}</p>
  </CombatInfoSC>
};