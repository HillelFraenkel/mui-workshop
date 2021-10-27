import { Menu, MenuItem } from "@mui/material";
import React from "react";

export default function UserMenu(props) {
  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      //   id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={props.isMenuOpen}
      onClose={props.handleMenuClose}
    >
      <MenuItem onClick={props.handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={props.handleMenuClose}>My account</MenuItem>
    </Menu>
  );
}
