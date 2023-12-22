import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import moviesSlice, { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const UpComingMovies = useSelector((store) => moviesSlice.UpComingMovies);

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    !UpComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
