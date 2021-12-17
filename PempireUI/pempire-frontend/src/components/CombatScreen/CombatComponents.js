import React, { useState } from "react";
import { CombatProfileSC, AvatarSC, CombatInfoSC } from "./CombatStylings";

export const CombatProfile = (props) => {
  return <CombatProfileSC>
    <AvatarSC />
    <CombatInfo {...props} />
  </CombatProfileSC>
};

const CombatInfo = (props) => {
  const baseEntityInfo = {
    health: props.hasOwnProperty("health") ? props.health : 100,
    mana: props.hasOwnProperty("mana") ? props.mana : 100
  };
  const [entityInfo, setEntityInfo] = useState({
    health: baseEntityInfo.health,
    mana: baseEntityInfo.mana,
    statusConditions: []
  });

  return <CombatInfoSC>
    <p>Health: {entityInfo.health}</p>
    <p>Mana: {entityInfo.mana}</p>
  </CombatInfoSC>
};