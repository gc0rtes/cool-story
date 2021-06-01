import React, { useState } from "react";
// import { Link } from "react-router-dom";

//import my SpaceCard
import SpaceCard from "../../components/SpaceCard";
//import FormCard
import StoryFormCard from "./StoryFormCard";

//import the selector
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

//import bootstrap styles
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Loading from "../../components/Loading";
import Card from "react-bootstrap/Card";

//1)Show the user space here. Select the user informations from reduxstate to render it
//2)There is a button with Post a Story
//3)Clicking the button makes a form appear with the correct inputs for posting a story (show a formCard component)
//3.1) We can control the card render using the state
//When the form is submitted a request is sent to the server to create the story (store the "name", "imgURL", "content" in the useState and then dispatch an action to send to server)
//The request uses JWT authorization

export default function MySpace() {
  const [postStory, setpostStory] = useState(false);
  const { token, space, id } = useSelector(selectUser);
  // console.log("what is my space?", space);
  return (
    <>
      {!space ? (
        <Loading />
      ) : (
        <SpaceCard
          id={space.id}
          title={space.title}
          description={space.description}
          backgroundColor={space.backgroundColor}
          color={space.color}
          showLink={false}
        />
      )}
      <Container>
        <Card>
          <Button onClick={() => setpostStory(true)}>Post a Cool Story</Button>
        </Card>
      </Container>

      {postStory ? (
        <Card>
          <StoryFormCard />
        </Card>
      ) : null}
    </>
  );
}
