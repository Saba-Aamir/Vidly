import React from "react";
import Button from "react-bootstrap/Button";

const MovieForm = ({ match, history }) => {
  // To get the id value from the URL
  return (
    <div>
      <h1>Movie Form</h1>
      <h4>{match.params.id}</h4>
      <Button onClick={() => history.push("/movies")}>Save</Button>
    </div>
  );
};

export default MovieForm;
