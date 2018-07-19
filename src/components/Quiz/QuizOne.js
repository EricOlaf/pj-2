import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setQuizOneAnswer } from "../../redux/ducks/reducer";

import "./QuizOne.css";
//import reducers

class QuizOne extends Component {
  //  state = {
  //    answers: ''
  //  }

  landToState = () => {
    this.props.setQuizOneAnswer("land");
    // this.setState({answers: 'land'})
  };

  waterToState = () => {
    this.props.setQuizOneAnswer("water");
    // this.setState({answers: 'water'})
  };

  render() {
    console.log(this.props.quizOneAnswer);
    return (
      <div>
        <div className="buttons">
          <button onClick={this.landToState}>Land</button>
          <button onClick={this.waterToState}>Water</button>
        </div>
        <Link className="link" to="/Quiz/two">
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
  { setQuizOneAnswer }
)(QuizOne);
