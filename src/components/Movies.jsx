import { Grid } from "@mui/material";
import { MovieCard } from "./MovieCard";
import { movies } from "../data/movies";

export default function Movies() {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: "15vh 2% 2vh 2%", bgcolor: 'primary.main' }}>
      {movies.map((movie) => (
        <Grid item>
          <MovieCard {...movie} />
        </Grid>
      ))}
    </Grid>
  );
}
