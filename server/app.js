const express = require("express");
const app = express();
const cors = require("cors");
require("./services/passport");
require("./routes/authRoutes")(app);

app.use(cors());

app.use(express.json());

module.exports = app;
