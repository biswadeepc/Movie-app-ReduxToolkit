import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchAsyncMovies(params.searchText));
    dispatch(fetchAsyncShows(params.searchText));
  }, [params, dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
