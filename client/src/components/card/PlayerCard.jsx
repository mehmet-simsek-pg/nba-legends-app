import { useState } from "react";
import Card from "react-bootstrap/Card";
import avatar from "../../assets/avatar.jpg";

const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  const handleClick = () => setShowImage(!showImage);

  return (
    <Card
      className="rounded-2 m-auto player-card"
      //onClick={() => setShowImage(!showImage)}
      onClick={handleClick}
    >
      {showImage ? (
        <Card.Img
          variant="top"
          src={img ? img : avatar}
          className="player-logo"
        />
      ) : (
        <ul className="m-auto">
          {statistics.map((stat, index) => {
            return (
              <li className="h5 text-start list-unstyled" key={index}>
                🏀 {stat}
              </li>
            );
          })}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
