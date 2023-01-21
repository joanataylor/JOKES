// const Joke = require("../models/jokes.model");
import Joke from "../models/jokes.model.js"

const findAllJokes = (req, res) => {
  Joke.find()
    .then((allDaJokes) => {
      res.json({ jokes: allDaJokes });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

const findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((OneSingleJoke) => {
      res.json({ joke: OneSingleJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

const createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newlyCreatedJoke) => {
      res.json({ joke: newlyCreatedJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

const updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => {
      res.json({ joke: updatedJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

const deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

//if default i dont need curly braces
//if regular export i need curly braces even if its just one export
export {deleteAnExistingJoke, updateExistingJoke, createNewJoke, findAllJokes, findOneSingleJoke};
