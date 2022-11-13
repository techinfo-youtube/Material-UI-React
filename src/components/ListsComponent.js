import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
const ListsComponent = () => {
  const courses = ["react", "nodejs", "mern"];
  return (
    <div>
      <List sx={{ width: 250, background: "gray" }}>
        {courses.map((course) => (
          <ListItem>
            <ListItemButton>{">"}</ListItemButton>
            <ListItemText primary={course} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListsComponent;
