import "./CombatStyles.css";
import blue_background from "./blue_background.png";

const CombatContainer = (props) => {
  return <div
  className="combat-container"
  style={{ backgroundImage: `url(${blue_background})`, backgroundRepeat: "no-repeat" }}>
    {props.children}
  </div>
}

const CombatOptions = (props) => {
  return <div
  className="combat-options">
    {props.children}
  </div>
}

const MoveTypeDisplay = (props) => {
  return <div
  className="four-combat-options-display move-type-display">
    {props.children}
  </div>
}

const MoveDisplay = (props) => {
  return <div
  className="four-combat-options-display move-display">
    {props.children}
  </div>
}

const CombatOptionButton = (props) => {
  return <div
  className="combat-option-button"
  onClick={props.onClick}>
    {props.children}
  </div>
}

const BackButton = (props) => {
  return <p
  className="back-button">
    Back
  </p>
}

const CombatProfile = (props) => {
  return <div
  className="combat-profile">
    <p className="avatar">Avatar</p>
    <p className="combat-info">Info</p>
  </div>
}


export { CombatContainer, CombatOptions, MoveTypeDisplay, MoveDisplay, CombatOptionButton, BackButton, CombatProfile };