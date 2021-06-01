//import React tools
import React, { useState } from "react";

//import Redux tools
import { useDispatch } from "react-redux";

//import styles
import Button from "react-bootstrap/Button";

//import action
import { postStory } from "../../store/user/actions";

//Step 1 - Make the formCard
//Step 2 - Dispatch an action to the state

export default function StoryFormCard() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();
    // console.log("new story:", name, content, imageUrl);
    dispatch(postStory(name, content, imageUrl));

    setName("");
    setContent("");
    setImageUrl("");

    // STEPS:
    // - Store all form's input into useState
    // - clear the input fields
    // - dispatch an action that sends the new story to the reduxState and then to the server DB
  };
  return (
    <form onSubmit={submit}>
      <h2>
        <em>Post a Cool Story</em>
      </h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Content:{" "}
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Image url:{" "}
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
      </p>
      <p>
        <Button type="submit">Post!</Button>
      </p>
    </form>
  );
}
