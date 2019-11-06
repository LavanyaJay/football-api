const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/team", (request, response, next) => {
	Team.findAll()
		.then(teams => {
			response.json(teams);
		})
		.catch(next);
});

router.post("/team", (request, response, next) => {
	Team.create({ name: request.body.name })
		.then(team => response.json(team))
		.catch(err => next(err));
});

router.get("/team/:id", (req, res, next) => {
	Team.findByPk(req.params.id)
		.then(team => {
			if (team) {
				res.json(team);
			} else {
				res.status(404).send(404);
			}
		})
		.catch(next);
});

module.exports = router;
