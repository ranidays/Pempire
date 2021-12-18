import styled from "styled-components";

export const CombatContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/assets/blue_background.png") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */ 
  /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
`;

export const CombatOptions = styled.div`
  width: 100%;
  height: 33%;
  background-color: red;
  display: flex;
`;

const FourCombatOptionsDisplay = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const MoveTypeDisplay = styled(FourCombatOptionsDisplay)`
  background-color: cyan;
`;

export const MoveDisplay = styled(FourCombatOptionsDisplay)`
  background-color: magenta;
`;

export const CombatOptionButton = styled.div`
  border: solid 0.5rem brown;
  margin: 1rem;
  background-color: green;
  cursor: pointer;
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: "Consolas", serif;
  font-size: 2rem;

  &:nth-child(n+3) {
    margin-top: 0;
  }

  &:nth-child(even) {
    margin-left: 0;
  }
`;

export const BackButton = styled.div`
  margin: 0;
  border: solid 0.2rem brown;
  background-color: black;
  color: white;
  font-family: "Times New Roman", serif;
  font-size: 2rem;
`;

export const UserDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FoeDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
`;

export const CombatProfileSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const AvatarSC = styled.div`
  width: 7rem;
  height: 7rem;
  background: url("/assets/narrator.png") no-repeat center center;
`;

export const CombatInfoSC = styled.div`
  background-color: blueviolet;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;