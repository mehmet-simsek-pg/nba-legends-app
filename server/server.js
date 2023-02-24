const express = require("express");
const app = express();

app.get("/players", (req, res) => {
  res.json({
    player: {
      name: "Kareem Abdul-Jabbar",
      img: "https://efemeridesdoefemello.files.wordpress.com/2014/05/13jun14.jpeg?w=640",
      statistics: [
        "38,387 points",
        "17,440 rebaunds",
        "5,660 assist",
        "19 All Star",
      ],
    },
  });
});

app.listen(5000, () => console.log("server is running on port 5000"));
