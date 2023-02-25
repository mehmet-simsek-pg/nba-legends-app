import { Col, Container, Row, Form } from "react-bootstrap";
import { data } from "../../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const Card = () => {
  const [search, setSearch] = useState("");

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
          {data
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
