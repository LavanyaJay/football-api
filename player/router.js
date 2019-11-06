const { Router } = require("express");
const Player = require("./model");
const Team = require("../team/model");

const router = new Router();

router.get("/player", (request, response, next) => {
	Player.findAll()
		.then(players => {
			response.json(players);
		})
		.catch(next);
});

router.post("/player", (request, response, next) => {
	Player.create({
		name: request.body.name,
		no: parseInt(request.body.no),
		teamId: parseInt(request.body.teamId)
	})
		.then(player => response.json(player))
		.catch(err => next(err));
});

router.get("/player/:id", (req, res, next) => {
	Player.findByPk(req.params.id, { include: [Team] })
		.then(player => {
			if (player) {
				res.json(player);
			} else {
				res.status(404).send(404);
			}
		})
		.catch(next);
});

router.put("/player/:id", (req, res, next) => {
	Player.findByPk(req.params.id)
		.then(player => {
			if (player) {
				player.update({ no: parseInt(req.body.no) }).then(player => {
					res.json(player);
				});
			}
		})
		.catch(next);
});

module.exports = router;
