import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { useNavigate } from "react-router-dom";

const RecipeCard = (props) => {
  const { recipe } = props;
  const { id, image, title } = recipe;
  const navigate = useNavigate();

  return (
    <Card /* sx={{ maxWidth: 345 }} */>
      <CardMedia sx={{ height: 140 }} image={image} title="" />
      <div className="grid grid-rows-cardContent p-1">
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions className="flex justify-between">
          <Button onClick={() => navigate(`/detail/${id}`)} className="bg-primary text-black" variant="contained">
            View more
          </Button>
          <div>
            <Tooltip title="Add to favorites" placement="top">
              <IconButton
                className="text-secondary"
                aria-label="add to favorites"
              >
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add to calendar" placement="top">
              <IconButton
                className="text-secondary"
                aria-label="add to calendar"
              >
                <CalendarMonthIcon />
              </IconButton>
            </Tooltip>
          </div>
        </CardActions>
      </div>
    </Card>
  );
};

export default RecipeCard;
