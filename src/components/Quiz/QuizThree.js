import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import reducers
import {
  setQuizThreeAnswer,
  sendAllAnswersToBackEnd
} from "../../redux/ducks/reducer";

class QuizThree extends Component {
  motorToState = () => {
    this.props.setQuizThreeAnswer("motor");
    // this.setState({answers: 'land'})
  };

  musclesToState = () => {
    this.props.setQuizThreeAnswer("muscle");
    // this.setState({answers: 'water'})
  };

  onClickHandler = () => {
    //use redux to send answers to server
    const {
      quizOneAnswer,
      quizTwoAnswer,
      quizThreeAnswer,
      quizFourAnswer,
      quizFiveAnswer
    } = this.props;
    this.props
      .sendAllAnswersToBackEnd({
        quizOneAnswer,
        quizTwoAnswer,
        quizThreeAnswer,
        quizFourAnswer,
        quizFiveAnswer
      })
      .then(() => {
        console.log(this.props);
        // console.log(this.props.trips);
      });

    this.props.history.push("/results");
  };

  render() {
    console.log(this.props.quizThreeAnswer);
    return (
      <div>
        <div className="buttons">
          <button onClick={this.motorToState}>Motor</button>
          <button onClick={this.musclesToState}>Muscles</button>
        </div>
        <button className="link" onClick={this.onClickHandler}>
          submit
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(
  mapStateToProps,
  { setQuizThreeAnswer, sendAllAnswersToBackEnd }
)(QuizThree);
