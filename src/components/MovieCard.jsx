import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { myTheme as theme } from "../theme";

export function MovieCard({ title, year, genre, poster, description, expand }) {
  const cardStyle = {
    height: "275px",
    width: "175px",
    cursor: "pointer",
    bgcolor: "primary.main",
    color: "text.main",
    boxShadow: `0 0.5px 7px ${theme.palette.secondary.main}, 0 0.5px 7px ${theme.palette.secondary.main}`,
    "&:hover": {
      filter: "brightness(75%)",
      transition: "0.2s"
    }
  };
  return (
    <Card
      sx={cardStyle}
      onClick={() => expand({ title, year, genre, poster, description })}
    >
      <CardMedia
        component="img"
        image={`/posters/${poster}`}
        alt={title}
        sx={{ height: "80%" }}
      />
      <CardContent sx={{ p: "1% 2% 0 2%" }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption">
          {genre} | {year}
        </Typography>
      </CardContent>
    </Card>
  );
}
