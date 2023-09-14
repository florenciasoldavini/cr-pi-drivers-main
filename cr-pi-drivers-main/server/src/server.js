const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

const htmlPath = "../../client/dist/index.html"

server.use(express.static(
    path.join(__dirname, htmlPath)));

    server.get("*", (req, res) => {
        res.sendFile(
            path.join(__dirname, htmlPath)
          );
    })

module.exports = server;
