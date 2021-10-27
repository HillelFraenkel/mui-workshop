import { Grid } from "@mui/material";
import { MovieCard } from "./MovieCard";
import { movies } from "../data/movies";
import MovieModal from "./MovieModal";
import { useState } from "react";

export default function Movies() {
  const [movieInModal, setMovieInModal] = useState(null);
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ p: "15vh 2% 2vh 2%", bgcolor: "primary.main" }}
      >
        {movies.map((movie) => (
          <Grid item>
            <MovieCard {...movie} expand={setMovieInModal} />
          </Grid>
        ))}
      </Grid>
      <MovieModal
        isOpen={Boolean(movieInModal)}
        handleClose={() => setMovieInModal(null)}
        movie={movieInModal}
      />
    </>
  );
}
