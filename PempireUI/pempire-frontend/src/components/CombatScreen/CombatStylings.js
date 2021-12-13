import styled from "styled-components";

const MoveButton = styled.div`
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
  onClick: ${props => props.onClick};
`

export { MoveButton };