import {UserInputItem, UserInputDetails} from './styledComponents'

const UserInputs = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <UserInputItem>
      <UserInputDetails>
        {userEnteredText} : {textLength}
      </UserInputDetails>
    </UserInputItem>
  )
}

export default UserInputs
