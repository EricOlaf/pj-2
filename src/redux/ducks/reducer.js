import axios from "axios";

const GET_TRIPS = "GET_TRIPS";
const SET_QUIZ_ONE_ANSWER = "SET_QUIZ_ONE_ANSWER";
const SET_QUIZ_TWO_ANSWER = "SET_QUIZ_TWO_ANSWER";
const SET_QUIZ_THREE_ANSWER = "SET_QUIZ_THREE_ANSWER";
const SET_QUIZ_FOUR_ANSWER = "SET_QUIZ_FOUR_ANSWER";
const SET_QUIZ_FIVE_ANSWER = "SET_QUIZ_FIVE_ANSWER";
const SEND_ALL_ANSWERS_TO_BACK_END = "SEND_ALL_ANSWERS_TO_BACK_END";

const initialState = {
  trips: "",
  quizOneAnswer: "",
  quizTwoAnswer: "",
  quizThreeAnswer: "",
  quizFourAnswer: "",
  quizFiveAnswer: "",
  allAnswers: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  const { payload } = action;
  console.log({ payload, state });
  switch (action.type) {
    case GET_TRIPS + "_FULFILLED":
      return { ...state, trips: action.payload.data };

    case SET_QUIZ_ONE_ANSWER:
      return { ...state, quizOneAnswer: action.payload };

    case SET_QUIZ_TWO_ANSWER:
      return { ...state, quizTwoAnswer: action.payload };

    case SET_QUIZ_THREE_ANSWER:
      return { ...state, quizThreeAnswer: action.payload };

    case SET_QUIZ_FOUR_ANSWER:
      return { ...state, quizFourAnswer: action.payload };

    case SET_QUIZ_FIVE_ANSWER:
      return { ...state, quizFiveAnswer: action.payload };

    case `${SEND_ALL_ANSWERS_TO_BACK_END}_PENDING`:
      return { ...state, loading: true };
    case `${SEND_ALL_ANSWERS_TO_BACK_END}_FULFILLED`:
      //our answers and results from the backend are available on action.payload.data
      return {
        ...state,
        loading: false,
        trips: action.payload.data.trips,
        answers: action.payload.data.answers
      };
    case `${SEND_ALL_ANSWERS_TO_BACK_END}_REJECTED`:
      return { ...state, loading: false };

    default:
      return state;
  }
}

//action creators : telling redux to interact with state
export function setQuizOneAnswer(str) {
  return {
    type: SET_QUIZ_ONE_ANSWER,
    payload: str
  };
}

export function setQuizTwoAnswer(str) {
  return {
    type: SET_QUIZ_TWO_ANSWER,
    payload: str
  };
}

export function setQuizThreeAnswer(str) {
  return {
    type: SET_QUIZ_THREE_ANSWER,
    payload: str
  };
}
export function setQuizFourAnswer(str) {
  return {
    type: SET_QUIZ_FOUR_ANSWER,
    payload: str
  };
}

export function setQuizFiveAnswer(str) {
  return {
    type: SET_QUIZ_FIVE_ANSWER,
    payload: str
  };
}

export function getTrips() {
  return {
    type: GET_TRIPS,
    payload: axios.get("/api/trips")
  };
}

export function sendAllAnswersToBackEnd(obj) {
  return {
    type: SEND_ALL_ANSWERS_TO_BACK_END,
    payload: axios.post("/api/answers", obj)
  };
}
