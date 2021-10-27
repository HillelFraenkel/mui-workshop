import React from "react";
import { AppBar, Typography, Box, Toolbar } from "@mui/material";
import {} from "@mui/icons-material";

export default function TopBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" sx={{ ml: 5, flexGrow: 1 }}>
            MUI-WEBSITE
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
