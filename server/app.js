const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const { cookieKey } = require("./config/key");
const app = express();
const cors = require("cors");
require("./models/user");
require("./services/passport");

app.use(cors());

//app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

//這是一個route
require("./routes/authRoutes")(app);
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

module.exports = app;
