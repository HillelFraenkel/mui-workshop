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
import SideBar from "./SideBar";
import UserMenu from "./UserMenu";
export default function TopBar(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ mr: 2 }}>
        <Toolbar>
          <IconButton onClick={() => setDrawerOpen(true)}>
            <Menu color="secondary" />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(!drawerOpen)}
          >
            <SideBar />
          </Drawer>
          <Typography
            variant="h4"
            sx={{ ml: 5, flexGrow: 1 }}
            color="secondary"
          >
            NETFLIX
          </Typography>
          <ButtonGroup sx={{ right: "5%" }}>
            <IconButton size="large">
              <Badge badgeContent={5} color="secondary">
                <Notifications color="secondary" fontSize="inherit" />
              </Badge>
            </IconButton>
            <IconButton onClick={handleUserMenuOpen}>
              <Avatar sx={{ bgcolor: "secondary" }}></Avatar>
            </IconButton>
            <UserMenu
              handleMenuClose={handleUserMenuClose}
              isMenuOpen={Boolean(anchorEl)}
              anchorEl={anchorEl}
            />
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
