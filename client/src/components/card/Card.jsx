import { Col, Container, Row, Form } from "react-bootstrap";
import PlayerCard from "./PlayerCard";
import { useState, useEffect } from "react";

const Card = () => {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState([]);
  const url = "https://nbaplayers.onrender.com/api/v1/players";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  console.log(players);
  return (
    <>
      <Form.Control
        placeholder="Search player..."
        className="w-50 m-auto"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="g-3 justify-content-center">
          {players
            .filter((player) =>
              player.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((player, index) => {
              return (
                <Col key={index} xl={3} lg={4} md={6}>
                  <PlayerCard {...player} />;
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default Card;
