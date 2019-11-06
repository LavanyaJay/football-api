const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
//const db = require("./db");

//const Team = require("./team/model");
const jsonParser = bodyParser.json();
app.use(jsonParser);

const teamRouter = require("./team/router");
const playerRouter = require("./player/router");

app.use(teamRouter);
app.use(playerRouter);

app.listen(process.env.PORT || port, () =>
	console.log("Listening on port:" + port)
);
