import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Bootstrap design
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

//Import Action fetchSpaces and put inside a useEffect
import { fetchSpaces } from "../../store/spaces/actions";
//Import the selector
import { selectSpaces } from "../../store/spaces/selectors";

//import card to render spaces
import SpaceCard from "../../components/SpaceCard";

export default function Spaces() {
  const dispatch = useDispatch();

  //from react sate to our component!
  const spaces = useSelector(selectSpaces);
  // console.log("what is spaces?", spaces);

  //trigger to fetch spaces from DB
  useEffect(() => {
    if (!spaces.length)
      //just fetch at first time!
      dispatch(fetchSpaces());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>Spaces</h1>
      </Jumbotron>

      {/* inside the container we render a spaceCard for each space on my server*/}
      <Container>
        {spaces.map((space) => {
          return (
            <SpaceCard
              key={space.id}
              id={space.id}
              title={space.title}
              description={space.description}
              backgroundColor={space.backgroundColor}
              color={space.color}
              showLink={true}
            />
          );
        })}
      </Container>
    </div>
  );
}
