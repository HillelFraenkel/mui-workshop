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
    <Box sx={{ width: 250, bgcolor: 'primary.main', height: '100%' }} role="presentation">
      <List>
        {sideBarItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon('secondary.main')}</ListItemIcon>
            <ListItemText primary={item.text} sx={{color: 'secondary.main'}} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
}
