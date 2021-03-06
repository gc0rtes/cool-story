import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function SpaceCard(props) {
  return (
    <Jumbotron
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {/*in order to reuse the card, we made a option tho show link/button */}
      {props.showLink ? (
        <Link to={`/spaces/${props.id}`}>
          <Button>Visit space</Button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}
