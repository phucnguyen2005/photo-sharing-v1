import React from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) return <Typography>User not found</Typography>;

  return (
    <div>
      <Typography variant="h5">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography>Location: {user.location}</Typography>
      <Typography>Occupation: {user.occupation}</Typography>
      <Typography>Description: {user.description}</Typography>

      <Button
        variant="contained"
        component={Link}
        to={`/photos/${user._id}`}
      >
        View Photos
      </Button>
    </div>
  );
}

export default UserDetail;