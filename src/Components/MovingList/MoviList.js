import React from "react";
import { getAllMovies } from "../../feutures/movies/movieSlice";
import { useSelector } from "react-redux";
import MovieCart from "../MovieCart/Moviecart";
import styled from "styled-components";
const MoviList = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = " ";

  renderMovies =
    movies.Responce == "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCart key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <MovieWrapper>
      <MovieList>
        <MovieContainer>{renderMovies}</MovieContainer>
      </MovieList>
    </MovieWrapper>
  );
};

export default MoviList;

const MovieWrapper = styled.div``;
const MovieList = styled.div`
  margin: 20px 0;

  h2 {
    margin-bottom: 10px;
    font-weight: 600;
    color: #fff;
  }
`;
const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(autofill, minmax(220px, 1fr));
  grid-gap: 15px;
`;
