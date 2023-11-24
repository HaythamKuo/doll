const http = require("http");
const app = require("./app");
const { mongoConnect } = require("./services/mongoose");

const server = http.createServer(app);

const PORT = process.env.PORT || 5500;

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => console.log(`正在聆聽${PORT}`));
}

startServer();
