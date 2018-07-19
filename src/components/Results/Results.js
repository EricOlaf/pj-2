import React, { Component } from "react";
import { connect } from "react-redux";
import { trips } from "../../redux/ducks/reducer";
import { Link } from "react-router-dom";

//const Results = () => <p>Results</p>;

class Results extends Component {
  render() {
    return (
      <div>
        <h1>trip ideas</h1>
        <h2>{this.props.trips}</h2>
        <Link className="link" to="/signup">
          Go To Calendar
        </Link>
        <Link className="link" to="/Quiz/one">
          Take Quiz Again
        </Link>
        <a href="http://localhost:3001/login">LOGIN</a>
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
  null
)(Results);
