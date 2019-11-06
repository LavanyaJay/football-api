const { Router } = require("express");
const Player = require("./model");

const router = new Router();

router.get("/player", (request, response, next) => {
	Player.findAll()
		.then(players => {
			response.json(players);
		})
		.catch(next);
});

router.post("/player", (request, response, next) => {
	Player.create({ name: request.body.name })
		.then(player => response.json(player))
		.catch(err => next(err));
});

router.get("/player/:id", (req, res, next) => {
	Player.findByPk(req.params.id)
		.then(team => {
			if (player) {
				res.json(player);
			} else {
				res.status(404).send(404);
			}
		})
		.catch(next);
});

module.exports = router;
