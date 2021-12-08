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
export const InputField = styled.input`
  background-color: white;
  width: 500px;
  height: 35px;
  transform: translateY(-980%);
  border-radius: 10px;
  margin-bottom: 25px;
  padding-left: 1%;

`

export const CustomButton = styled.button`
  transform: translateY(-510%);
  font-family: 'ArcadeClassic', serif ;
  color: white;
  font-size: 55px;
  margin-bottom: 2%;
  width: 20%;
  background: transparent;
  border-radius: 10px;
`

export const Header = styled.h1`
  position: absolute;
  bottom: 74%;
  font-family: 'ArcadeClassic', serif ;
  color: white;
`
