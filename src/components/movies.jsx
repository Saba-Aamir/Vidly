import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesPagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Filters from "./common/filters";
import MoviesTable from "./moviesTable";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    selectedGenre: "All Genres",
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    //we clone to movies array
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    //we clone the movie properties of the required movie.
    movies[index] = { ...movies[index] };
    //if liked is true, it becomes false, if false it becomes true.
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    //resetting currentPage to 1 everytime a genre is selected to prevent bugs.
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    //Set state with the updated sortColumn object
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      movies: allMovies,
      selectedGenre,
    } = this.state;

    const filtered =
      selectedGenre === "All Genres"
        ? allMovies
        : allMovies.filter((m) => m.genre.name === selectedGenre);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn,
      genres,
      selectedGenre,
    } = this.state;

    if (count === 0)
      return <h4>Sorry, there are no movies in the database.</h4>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <>
        <h4>Showing {totalCount} movies in the database.</h4>
        <Row>
          <Col md={3}>
            <Filters
              genres={genres}
              onGenreSelect={this.handleGenreSelect}
              selectedGenre={selectedGenre}
            />
          </Col>
          <Col md={7}>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />

            <MoviesPagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Movies;
