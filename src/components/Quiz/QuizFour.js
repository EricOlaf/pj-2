import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setQuizFourAnswer } from "../../redux/ducks/reducer";

class QuizFour extends Component {
  heightsToState = () => {
    this.props.setQuizFourAnswer("heights");
  };
  groundToState = () => {
    this.props.setQuizFourAnswer("ground");
  };

  render() {
    console.log(this.props.quizFourAnswer);
    return (
      <div>
        <div className="buttons">
          <button onClick={this.heightsToState}>Heights</button>
          <button onClick={this.groundToState}>Stay on the Ground</button>
        </div>
        <Link className="link" to="/Quiz/five">
          submit
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { setQuizFourAnswer }
)(QuizFour);
