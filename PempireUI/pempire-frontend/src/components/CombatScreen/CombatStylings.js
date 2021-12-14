import styled from "styled-components";

const CombatContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/assets/blue_background.png") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */ 
  /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
`;

const CombatOptions = styled.div`
  width: 100%;
  height: 33%;
  background-color: red;
  display: flex;
`;

const FourCombatsOptionDisplay = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const MoveTypeDisplay = styled(FourCombatsOptionDisplay)`
  background-color: cyan;
`;

const MoveDisplay = styled(FourCombatsOptionDisplay)`
  background-color: magenta;
`;

const CombatOptionButton = styled.div`
  border: solid 0.5rem brown;
  margin: 1rem;
  background-color: green;
  cursor: pointer;
  onClick: ${props => props.onClick};
  :nth-child(n+3) {
    margin-top: 0;
  }
  :nth-child(even) {
    margin-left: 0;
  }
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: "Consolas", serif;
  font-size: 2rem;
`;

export { CombatContainer, CombatOptions, MoveTypeDisplay, MoveDisplay, CombatOptionButton };