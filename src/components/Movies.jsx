import { Grid } from "@mui/material";
import { MovieCard } from './MovieCard';
import { movies } from '../data/movies';

export default function Movies() {
  return (
    <Grid container spacing={2} justifyContent='center'>
        {movies.map(movie =>
            <Grid item>
                <MovieCard {...movie} />
            </Grid>
        )}
    </Grid>
  );
}
