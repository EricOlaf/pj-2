import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setQuizTwoAnswer } from "../../redux/ducks/reducer";

class QuizTwo extends Component {
  snowToState = () => {
    this.props.setQuizTwoAnswer("snow");
  };
  heatToState = () => {
    this.props.setQuizTwoAnswer("heat");
  };

  render() {
    console.log(this.props.quizTwoAnswer);
    return (
      <div>
        <div className="buttons">
          <button onClick={this.snowToState}>Snow</button>
          <button onClick={this.heatToState}>Heat</button>
        </div>
        <Link className="link" to="/Quiz/three">
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
  { setQuizTwoAnswer }
)(QuizTwo);
