const Player = require("../models/PlayerModel");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllPlayers = asyncWrapper(async (req, res) => {
  const Players = await Player.find({});

  res.status(200).json({ Players });
});

const createPlayer = asyncWrapper(async (req, res) => {
  const Players = await Player.create(req.body);
  res.status(201).json({ Players });
});

const getPlayer = asyncWrapper(async (req, res, next) => {
  const { id: PlayerID } = req.params;
  const Player = await Player.findOne({ _id: PlayerID });
  if (!Player) {
    return next(createCustomError(`No Player with id : ${PlayerID}`, 404));
  }

  res.status(200).json({ Player });
});
const deletePlayer = asyncWrapper(async (req, res, next) => {
  const { id: PlayerID } = req.params;
  const Player = await Player.findOneAndDelete({ _id: PlayerID });
  if (!Player) {
    return next(createCustomError(`No Player with id : ${PlayerID}`, 404));
  }
  res.status(200).json({ Player });
});
const updatePlayer = asyncWrapper(async (req, res, next) => {
  const { id: PlayerID } = req.params;

  const Player = await Player.findOneAndUpdate({ _id: PlayerID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!Player) {
    return next(createCustomError(`No Player with id : ${PlayerID}`, 404));
  }

  res.status(200).json({ Player });
});

module.exports = {
  getAllPlayers,
  createPlayer,
  getPlayer,
  updatePlayer,
  deletePlayer,
};
