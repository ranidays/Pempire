import "./CombatStyles.css";
import { CombatProfileSC, AvatarSC, CombatInfoSC } from "./CombatStylings";

export const CombatProfile = (props) => {
  return <CombatProfileSC>
    <AvatarSC />
    <CombatInfoSC>Info</CombatInfoSC>
  </CombatProfileSC>
};