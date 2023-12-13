const app = require("./app");
const http = require("http");

const server = http.createServer(app);
const port = process.env.PORT || 7231;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
