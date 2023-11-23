const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const PORT = process.env.PORT || 5500;

function startServer() {
  server.listen(PORT, () => console.log(`正在聆聽${PORT}`));
}

startServer();
