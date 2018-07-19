require("dotenv").config();
const express = require("express");
//node
const { json } = require("body-parser");
//takes body off of the request and puts in into a readable format.
const massive = require("massive");
//what connects your server to SQL postgres.
const session = require("express-session");
//used for making cookies :)
const cors = require("cors");
//used for auth
const passport = require("passport");

//middleware
const checkForSession = require("./middleware/checkForSession");
//Controllers
const answersCtrl = require("./controllers/answers_controller");
//Auth
const { getUser, strat, logout } = require(`${__dirname}/controllers/authCtrl`);

const app = express();
const port = 3001;

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => err);

app.use(cors());
app.use(json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 2 * 7 * 24 * 60 * 60 * 1000
    }
  })
);

app.use(checkForSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
  const db = app.get("db");
  console.log({ user });
  db.getUserByAuthId([user.id])
    .then(response => {
      if (!response[0]) {
        db.addUserByAuthId([
          user.name.givenName,
          user.name.familyName,
          user.emails[0].value,
          user.id
        ])
          .then(res => {
            console.log(res);
            return done(null, res[0]);
          })
          .catch(console.log);
      } else return done(null, response[0]);
    })
    .catch(console.log);
  return done(null, user);
});

passport.deserializeUser((user, done) => done(null, user));

// passport.serializeUser((user, done) => {
//   const db = app.get('db');
//   db.getUserByAuthid([user.id]).then(response => {
//     if (response[0]) {
//       db.addUserByAuthid([user.displayName, user.id]).then(res => done(null, res[0])).catch(console.log);
//     } else return done(null, response[0]);
//   });
// });
// passport.deserializeUser((user, done) => {});

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/signup",
    failureRedirect: "/login"
  })
);

app.get("/api/me", getUser);
app.get("/logout", logout);

app.get("/api/test", (req, res) => {
  app
    .get("db")
    .users.find({})
    .then(response => res.status(200).json(response));
});
// TripAnswers
app.get("/api/answers", answersCtrl.read);
app.post("/api/answers", answersCtrl.create);

app.listen(port, () => {
  console.log(`WHISTLE TIP @ port ${port}`);
});
