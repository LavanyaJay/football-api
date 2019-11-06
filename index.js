const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

//const db = require("./db");

//const Team = require("./team/model");

const teamRouter = require("./team/router");

app.use(teamRouter);

app.listen(process.env.PORT || port, () =>
	console.log("Listening on port:" + port)
);
