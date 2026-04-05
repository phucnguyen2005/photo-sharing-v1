import React from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import models from "../../modelData/models";

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  return (
    <div>
      {photos.map((photo) => (
        <Card key={photo._id} style={{ marginBottom: "20px" }}>
          <CardMedia
            component="img"
            image={`/images/${photo.file_name}`}
            alt=""
          />
          <CardContent>
            <Typography>
              {new Date(photo.date_time).toLocaleString()}
            </Typography>

            {photo.comments &&
              photo.comments.map((comment) => (
                <div key={comment._id}>
                  <Typography variant="body2">
                    <b>
                      <Link to={`/users/${comment.user._id}`}>
                        {comment.user.first_name} {comment.user.last_name}
                      </Link>
                    </b>
                    : {comment.comment}
                  </Typography>
                  <Typography variant="caption">
                    {new Date(comment.date_time).toLocaleString()}
                  </Typography>
                </div>
              ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;