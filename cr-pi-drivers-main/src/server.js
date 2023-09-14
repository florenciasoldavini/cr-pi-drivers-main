const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

server.use(express.static(
    path.join(__dirname, "../client/dist"))
);

server.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../client/dist/index.html")
    );
});

module.exports = server;
