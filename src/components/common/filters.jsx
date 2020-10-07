import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Filters = ({ genres, onGenreSelect, selectedGenre }) => {
  return (
    <ListGroup>
      <ListGroup.Item
        onClick={() => onGenreSelect("All Genres")}
        className={selectedGenre === "All Genres" ? "active" : ""}
      >
        All Genres
      </ListGroup.Item>
      {genres.map((genre) => (
        <ListGroup.Item
          key={genre._id}
          onClick={() => onGenreSelect(genre.name)}
          className={selectedGenre === genre.name ? "active" : ""}
        >
          {genre.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

//To reduce the number of props being passed to ListGroup, we define default props.
// ListGroup.defaultProps = {
//   textProperty: "name",
//   valueProperty: "_id",
// };

export default Filters;
