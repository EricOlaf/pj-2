import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./components/About/About";
import Landing from "./components/Landing/Landing";
import Signup from "./components/Signup/Signup";
import QuizOne from "./components/Quiz/QuizOne";
import QuizTwo from "./components/Quiz/QuizTwo";
import QuizThree from "./components/Quiz/QuizThree";
import QuizFour from "./components/Quiz/QuizFour";
import QuizFive from "./components/Quiz/QuizFive";
import Results from "./components/Results/Results";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/signup" component={Signup} />
    <Route path="/results" component={Results} />
    <Route path="/Quiz/one" component={QuizOne} />
    <Route path="/Quiz/two" component={QuizTwo} />
    <Route path="/Quiz/three" component={QuizThree} />
    <Route path="/Quiz/four" component={QuizFour} />
    <Route path="/Quiz/five" component={QuizFive} />
  </Switch>
);

export default Routes;
