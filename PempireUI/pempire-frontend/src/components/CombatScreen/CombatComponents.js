import "./CombatStyles.css";

const CombatOptions = (props) => <div className="combat-options">{props.children}</div>

const MoveTypeDisplay = (props) => <div className="four-combat-options-display move-type-display">{props.children}</div>

const MoveDisplay = (props) => <div className="four-combat-options-display move-display">{props.children}</div>

const CombatOptionButton = (props) => <div className="combat-option-button" onClick={props.onClick}>{props.children}</div>

const BackButton = (props) => <p className="back-button">Back</p>

const CombatProfile = (props) => <div className="combat-profile">
  <p className="avatar">User Avatar</p>
  <p className="combat-info">User Info</p>
</div>


export { CombatOptions, MoveTypeDisplay, MoveDisplay, CombatOptionButton, BackButton, CombatProfile };