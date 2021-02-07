import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import "./Species.css";

const Species = () => {
  const [species, setSpecies] = useState("");

  let getSpecies = "https://ghibliapi.herokuapp.com/species";

  useEffect(() => {
    axios.get(getSpecies).then((res) => {
      const speciesList = res.data.map((species) => (
        <Card
          key={species.id}
          className="species_card"
          style={{ width: "18rem" }}
        >
          <Card.Header as="h5">{species.name}</Card.Header>
          <Card.Body>
            <Card.Title>Classification: {species.classification}</Card.Title>
            <Card.Text>
              <strong>Eye colors:</strong> {species.eye_colors}{" "}
            </Card.Text>
            <Card.Text>
              <strong>Hair colors:</strong> {species.hair_colors}{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      ));
      setSpecies(speciesList);
    });
  }, []);

  return (
    <div>
      <h1>Common species in Ghibli films</h1>
      <div className="species_cards">{species}</div>
    </div>
  );
};

export default Species;
