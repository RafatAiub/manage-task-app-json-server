const jsonServer = require("json-serve");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middle_wares = jsonServer.default();
const port = process.env.PORT || 3200;

server.use(middle_wares);
server.use(router);
server.listen(port);
