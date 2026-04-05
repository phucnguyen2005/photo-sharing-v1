import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";

function TopBar() {
  const location = useLocation();
  const { userId } = useParams();

  let contextText = "Photo Sharing App";

  if (location.pathname.startsWith("/users/") && userId) {
    const user = models.userModel(userId);
    if (user) {
      contextText = `${user.first_name} ${user.last_name}`;
    }
  }

  if (location.pathname.startsWith("/photos/") && userId) {
    const user = models.userModel(userId);
    if (user) {
      contextText = `Photos of ${user.first_name} ${user.last_name}`;
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography style={{ flexGrow: 1 }}>
          Nguyễn Bách Phúc
        </Typography>
        <Typography>{contextText}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;