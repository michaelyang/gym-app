require("dotenv").config();
const createServer = require("./createServer");

const server = createServer();

server.listen({ port: process.env.PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
