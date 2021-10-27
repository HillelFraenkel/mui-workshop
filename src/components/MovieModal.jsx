import {
  Box,
  CardMedia,
  Chip,
  Divider,
  Modal,
  Paper,
  Typography
} from "@mui/material";

export default function MovieModal(props) {
  return (
    <Modal open={props.isOpen} onClose={props.handleClose}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 500,
          border: 0,
          bgcolor: "primary.main",
          boxShadow: 24,
          p: 4,
          borderRadius: 5
        }}
      >
        <Typography variant="h1" color="secondary">
          {props.movie && props.movie.title}
        </Typography>
        <Box>
          <Chip
            label={props.movie && props.movie.genre}
            color="secondary"
            variant="outlined"
            sx={{ mr: 2 }}
          />
          <Chip
            label={props.movie && props.movie.year}
            variant="outlined"
            color="secondary"
          />
        </Box>
        <Divider sx={{ bgcolor: "secondary.main", mt: 2, mb: 2 }} />
        <Box>
          <CardMedia
            component="img"
            image={`/posters/${props.movie && props.movie.poster}`}
            alt={props.movie && props.movie.title}
            sx={{ height: "200px", width: "130px" }}
          />
          <Typography
            variant="h6"
            color="text.main"
            sx={{ overflow: "hidden", maxBlockSize: "200px" }}
          >
            {props.movie && props.movie.description}
          </Typography>
        </Box>
      </Paper>
    </Modal>
  );
}
