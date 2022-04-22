import React, { useEffect } from "react";
import MoviList from "../MovingList/MoviList";
import MovieApi from "../../Commen/api/MovieApi";
import { APIKey } from "../../Commen/api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../feutures/movies/movieSlice";

const Home = () => {
  const movieText = "Gmng og wasepiut";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      )
      .catch((err) => {
        console.log("err :", err);
      });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MoviList />
    </div>
  );
};

export default Home;
