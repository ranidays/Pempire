import "./CombatStyles.css";

const CombatOptions = (props) => <div className="combat-options">{props.children}</div>

const MoveTypeDisplay = (props) => <div className="four-combat-options-display move-type-display">{props.children}</div>

const MoveDisplay = (props) => <div className="four-combat-options-display move-display">{props.children}</div>

const CombatOptionButton = (props) => <div className="combat-option-button" onClick={props.onClick}>{props.children}</div>

const BackButton = (props) => <div className="back-button-container"><p className="back-button">{props.children}</p></div>

export { CombatOptions, MoveTypeDisplay, MoveDisplay, CombatOptionButton, BackButton };