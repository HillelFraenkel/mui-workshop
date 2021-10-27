import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  ButtonGroup,
  IconButton,
  Badge,
  Drawer,
  Avatar
} from "@mui/material";
import {
  Menu,
  Search,
  Notifications,
  AccountCircle
} from "@mui/icons-material";
import { myTheme as theme } from "../theme";
export default function TopBar(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [alerts, setAlerts] = useState([
    "More human twins are being born now than ever before",
    "The first person convicted of speeding was going eight mph",
    "'New car smell' is the scent of dozens of chemicals",
    "The world's smallest reptile was first reported in 2021",
    "Some sea snakes can breathe through their skin",
    "The heads on Easter Island have bodies",
    "The moon has moonquakes",
    "Arachibutyrophobia is the fear of having peanut butter stick to the roof of your mouth",
    "The wood frog can hold its pee for up to eight months",
    "The feeling of getting lost inside a mall is known as the Gruen transfer",
    "Pineapple works as a natural meat tenderizer"
  ]);

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const alertHandler = () => {
    if (alerts.length > 0) {
      alert(alerts[alerts.length - 1]);
      let changeArr = [...alerts];
      changeArr.pop();
      setAlerts([...changeArr]);
    } else {
      alert("no new notifications :(");
    }
  };
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
