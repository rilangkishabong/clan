import React from "react";
import { useStyles } from "./useStyles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

export const ClanCard = ({ clan, history }) => {
  const classes = useStyles();
  const trimString = (str, min) => {
    if (str.length < min) {
      return str;
    } else {
      return str.substring(0, 9).concat("...");
    }
  };

  return (
    <Grid item xs={11} sm={6} md={3} lg={4} key={clan._id}>
      <Paper elevation={2}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.cover}
              image="https://i.pinimg.com/originals/91/4d/6f/914d6f1d7c055c70092f4247591ffd83.jpg"
            />
            <CardContent>
              <Typography variant="h5">{trimString(clan.name, 10)}</Typography>

              <Typography
                variant="caption"
                color="textSecondary"
                display="block"
              >
                {clan.origin}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => history.push(`/clan/update/${clan._id}`)}
            >
              Edit
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
};
