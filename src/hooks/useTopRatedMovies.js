import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import moviesSlice, { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector((store) => moviesSlice.TopRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !TopRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
