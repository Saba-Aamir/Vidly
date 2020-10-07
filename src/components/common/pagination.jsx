import React from "react";
import Pagination from "react-bootstrap/Pagination";
// import PropTypes from "prop-types";

const MoviesPagination = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
}) => {
  // const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = [];

  if (pagesCount === 1) return null;

  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }

  return (
    <Pagination>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

//Adding a check for the props including acceptable types and whether they're required or not.
// Pagination.propTypes = {
//   itemsCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   currentPage: PropTypes.number.isRequired,
// };

export default MoviesPagination;
