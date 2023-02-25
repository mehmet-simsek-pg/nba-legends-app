const express = require("express");
const router = express.Router();

const { getAllPlayers, createPlayer, getPlayer, updatePlayer, deletePlayer } =
  require("../controllers/PlayerController");

router.route("/players").get(getAllPlayers).post(createPlayer);
//router.route("/player").post(createPlayer);
router.route("/:id").get(getPlayer).patch(updatePlayer).delete(deletePlayer);

module.exports = router;
