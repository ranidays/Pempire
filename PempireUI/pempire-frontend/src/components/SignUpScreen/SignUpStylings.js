import styled from "styled-components";

export const CustomButton = styled.button`
  transform: translateY(-950%);
  font-family: 'ArcadeClassic', serif ;
  color: white;
  font-size: 35px;
  margin-bottom: 2%;
  margin-left: 2%;
  width: 15%;
  background: transparent;
  border-radius: 10px;
`

export const FormInputFieldContainer = styled.form`
  transform: translateY(90%);
  z-index: 1;
`

export const InputField = styled.input`
  background-color: white;
  width: 400px;
  height: 35px;
  border-radius: 10px;
  margin-bottom: 25px;
  padding-left: 2%;
  transform: translateY(-1800%);

`

export const Header = styled.h1`
  position: absolute;
  bottom: 65%;
  right: 44%;
  font-family: 'ArcadeClassic', serif ;
  color: white;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 3%;

`

export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 50%;
  margin-right: 3%;
`