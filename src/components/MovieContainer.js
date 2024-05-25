import React from "react";
import { MoviesList } from "./MoviesList";
import { useSelector } from "react-redux";

export const MovieContainer = () => {
  const movieCat = useSelector(store => store.movie)
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MoviesList title={"Now Playing Movies"} movies={movieCat.nowPlayingMovies} />
      </div>
    </div>
  );
};