import styled from "styled-components";
import b from "../assets/blue_background.png"

export const Container = styled.div`
  width: 100%;
  height: 100%;
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

export const TitleImg = styled.img`
  width: 598px;
  height: 631px;
  display: flex;
  padding: 2%;`


