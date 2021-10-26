import { Card, CardMedia, CardContent, CardHeader, Typography } from "@mui/material";

export function MovieCard({ title, year, genre, poster }) {
  const cardStyle = {
    height: "45vh",
    width: "30vh",
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(90%)"
    }
  };
  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        image={`/posters/${poster}`}
        alt={title}
        sx={{ height: "80%" }}
      />
        <Typography variant="subtitle2">
            {title}
          </Typography>
          <Typography variant='caption'>
                {genre} | {year}
          </Typography>
    </Card>
  );
}
