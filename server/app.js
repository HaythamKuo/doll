const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/errMiddleware");
require("./models/user");
require("./services/passport");

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// if (process.env.NODE_ENV === "production") {
//   const __dirname = path.resolve();
//   app.use(express.static(path.join(__dirname, "client/dist")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("Hello World");
//   });
// }

//這是一個route
require("./routes/authRoutes")(app);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
