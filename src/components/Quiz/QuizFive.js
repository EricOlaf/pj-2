import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  setQuizFiveAnswer,
  sendAllAnswersToBackEnd
} from "../../redux/ducks/reducer";

class QuizFive extends Component {
  adrenalineToState = () => {
    this.props.setQuizFiveAnswer("adrenaline");
  };
  relaxToState = () => {
    this.props.setQuizFiveAnswer("relax");
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
        console.log(this.props.trips);
      });

    //re-route to /signup
    this.props.history.push("/results");
  };

  render() {
    console.log(this.props.quizFiveAnswer);
    return (
      <div>
        <div className="buttons">
          <button onClick={this.adrenalineToState}>Adrenailne</button>
          <button onClick={this.relaxToState}>Relax</button>
        </div>
        <button className="link" onClick={this.onClickHandler}>
          submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { setQuizFiveAnswer, sendAllAnswersToBackEnd }
)(QuizFive);
