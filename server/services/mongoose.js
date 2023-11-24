const mongoose = require("mongoose");
const { mongoURI } = require("../config/key");

mongoose.connection.once("open", () => console.log("成功連接到dollDev"));
mongoose.connection.on("error", (err) => console.log(err));

async function mongoConnect() {
  await mongoose.connect(mongoURI);
}
async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
