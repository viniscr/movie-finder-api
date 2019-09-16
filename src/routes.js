const express = require('express');

const routes = express.Router();

const MovieController = require("./controllers/MovieController");

routes.get("/movies/upcoming", MovieController.upcoming);
routes.get("/movies/genres", MovieController.genres);
routes.get("/movies/search", MovieController.search);
routes.get("/movies/details/:id", MovieController.details);

module.exports = routes;