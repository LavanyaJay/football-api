const Team = require("../team/model");
const Sequelize = require("sequelize");
const db = require("../db");

const Player = db.define(
	"player",
	{
		name: {
			type: Sequelize.STRING,
			field: "player_name"
		},
		no: {
			type: Sequelize.INTEGER,
			field: "player_no"
		}
	},
	{ tableName: "players" }
);

Player.belongsTo(Team);

module.exports = Player;
