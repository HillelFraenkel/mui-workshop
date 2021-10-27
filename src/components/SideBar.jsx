import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { sideBarItems } from "../data/sideBarItems";
export default function SideBar(props) {
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {sideBarItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon()}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
}
