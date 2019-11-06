const Sequelize = require("sequelize");
const db = require("../db");

const Player = db.define(
	"player",
	{
		name: {
			type: Sequelize.STRING,
			field: "player_name"
		},
		number: {
			type: Sequelize.INTEGER,
			field: "player_no"
		}
	},
	{ tableName: "players" }
);
module.exports = Player;