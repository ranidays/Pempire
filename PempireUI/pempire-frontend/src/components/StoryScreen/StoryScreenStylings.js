import styled from "styled-components";
import b from "../../assets/blue_background.png"


export const Container = styled.div`
  width: 2000px;
  height: 2000px;
  background-image: url(${b});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  overflow: hidden;
  position: relative;
`
