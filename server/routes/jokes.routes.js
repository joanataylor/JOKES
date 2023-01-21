// const JokeController = require('../controllers/jokes.controller');
import {
  deleteAnExistingJoke,
  updateExistingJoke,
  createNewJoke,
  findAllJokes,
  findOneSingleJoke,
} from "../controllers/jokes.controller.js";

const jokeRoutes = (app) => {
  app.get("/api/jokes", findAllJokes);
  app.get("/api/jokes/:id", findOneSingleJoke);
  app.put("/api/jokes/:id", updateExistingJoke);
  app.post("/api/jokes", createNewJoke);
  app.delete("/api/jokes/:id", deleteAnExistingJoke);
};

export default jokeRoutes;
