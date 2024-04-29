import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
`

export const LeftPannel = styled.div`
  background-color: #ffc533;
  height: 110vh;
  width: 50%;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const InfoCardContainer = styled.div`
  background-color: #ffbf1f;
  padding: 20px;
`

export const Info = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-size: 42px;
  font-weight: bold;
  line-height: 50px;
`

export const UserInputsList = styled.ul`
  margin-top: 40px;
`

export const RightPannel = styled.div`
  background-color: #0f172a;
  height: 110vh;
  width: 50%;
  padding: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const CounterHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 42px;
  color: #ffbf1f;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
`

export const InputButtonContainer = styled.form`
  display: flex;
`

export const UserInput = styled.input`
  height: 35px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: #ffffff;
  padding-left: 15px;
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
`

export const AddButton = styled.button`
  height: 35px;
  background-color: #ffc533;
  font-family: 'Roboto';
  font-size: 14px;
  color: #1e293b;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  margin-left: 15px;
  padding: 10px 20px 10px 20px;
  outline: none;
  cursor: pointer;
`

export const EmptyImage = styled.img`
  width: 100%;
  height: 350px;
  padding: 30px;
`
