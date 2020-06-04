const server = require("./api/server.js");

const port = process.env.PORT || 8000;
// this is a test
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
