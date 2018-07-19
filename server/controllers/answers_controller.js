//const quizAnswers = require()

module.exports = {
  read: (req, res, next) => {
    console.log("hit");
    res.status(200).send(req.session.answers);
  },
  create: (req, res, next) => {
    console.log(req.body);
    const { quizOneAnswer, quizTwoAnswer, quizThreeAnswer } = req.body;
    let trips = "";
    if (
      quizOneAnswer === "land" &&
      quizTwoAnswer === "heat" &&
      quizThreeAnswer === "motor"
    ) {
      trips = "Dirtbiking and Razr trip in Southern Utah";
    }
    if (
      quizOneAnswer === "land" &&
      quizTwoAnswer === "heat" &&
      quizThreeAnswer === "muscle"
    ) {
      trips = "Biking, hiking, and rock climbing in Yosemite, Colorado";
    }
    if (
      quizOneAnswer === "land" &&
      quizTwoAnswer === "snow" &&
      quizThreeAnswer === "motor"
    ) {
      trips = "Snowmobiling in Yellowstone";
    }
    if (
      quizOneAnswer === "land" &&
      quizTwoAnswer === "snow" &&
      quizThreeAnswer === "muscle"
    ) {
      trips = "Back country and cross country skiing in the Tetons";
    }
    if (
      quizOneAnswer === "water" &&
      quizTwoAnswer === "heat" &&
      quizThreeAnswer === "motor"
    ) {
      trips = "Boating and Jetskiing in Lake Powell or Lake Tahoe";
    }
    if (
      quizOneAnswer === "water" &&
      quizTwoAnswer === "heat" &&
      quizThreeAnswer === "muscle"
    ) {
      trips =
        "Kayaking, PaddleBoarding, and surfing in Salmon River and Kauai ";
    }
    if (
      quizOneAnswer === "water" &&
      quizTwoAnswer === "snow" &&
      quizThreeAnswer === "motor"
    ) {
      trips = "Water and Snow don't mix! Take quiz again.";
    }
    if (
      quizOneAnswer === "water" &&
      quizTwoAnswer === "snow" &&
      quizThreeAnswer === "muscle"
    ) {
      trips = "Water and Snow don't mix! Take quiz again.";
    }

    req.session.answers = req.body;
    req.session.trips = trips; //your processed trips

    res
      .status(200)
      .send({ answers: req.session.answers, trips: req.session.trips });
  }
};
