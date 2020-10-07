import React from "react";

//When converting a class into a functional component, get rid of 'this' and pass props as a parameter to the function.
const Like = ({ onClick, liked }) => {
  return (
    <i
      className="material-icons mr-3"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {liked ? "favorite" : "favorite_border"}
    </i>
  );
};

export default Like;
