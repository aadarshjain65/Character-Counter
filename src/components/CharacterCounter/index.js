import {Component} from 'react'
import {v4} from 'uuid'

import UserInputs from '../UserInputs'

import {
  AppContainer,
  LeftPannel,
  InfoCardContainer,
  Info,
  UserInputsList,
  RightPannel,
  CounterHeading,
  InputButtonContainer,
  UserInput,
  AddButton,
  EmptyImage,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    userInputsList: [],
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputsList: [...prevState.userInputsList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {userInputsList} = this.state
    return userInputsList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputsList.map(eachItem => (
        <UserInputs key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state

    return (
      <AppContainer>
        <LeftPannel>
          <InfoCardContainer>
            <Info>Count the characters like a Boss...</Info>
          </InfoCardContainer>
          <UserInputsList>{this.renderUserInputs()}</UserInputsList>
        </LeftPannel>
        <RightPannel>
          <CounterHeading>Character Counter</CounterHeading>
          <InputButtonContainer onSubmit={this.onAddUserInput}>
            <UserInput
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the characters here"
            />
            <AddButton>Add</AddButton>
          </InputButtonContainer>
        </RightPannel>
      </AppContainer>
    )
  }
}

export default CharacterCounter
