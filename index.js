const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
app.listen(process.env.PORT || port, () =>
	console.log("Listening on port:" + port)
);
