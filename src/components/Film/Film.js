import React, { useState } from "react";
import { Card, ListGroupItem, ListGroup, Modal, Button } from "react-bootstrap";
import "./Film.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Film = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="film_card">
      <Card style={{ width: "18rem", background: "white" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Director: {props.director}</ListGroupItem>
          <ListGroupItem>Producer: {props.producer}</ListGroupItem>
          <ListGroupItem>Release time: {props.releaseDate}</ListGroupItem>
          <ListGroupItem>Ratting score: {props.rate}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link onClick={handleShow}>
            <Button variant="secondary">
              <FontAwesomeIcon icon={faChevronRight} /> {""}
              Film description
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
      </Modal>
    </div>
  );
};

export default Film;
