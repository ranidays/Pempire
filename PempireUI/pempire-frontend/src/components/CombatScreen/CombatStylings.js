import styled from "styled-components";

const MoveButton = styled.div`
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
  onClick: ${props => props.onClick};
`
export const CombatContainer = styled.div`
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
`

export { MoveButton };