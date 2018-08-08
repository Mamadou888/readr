import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { NavLink } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import fakeBooksData from "./FakeBooksData";

const styles = {
  card: {
    maxWidth: 345,
    display: "inline-block",
    marginRight: "10px",
    marginTop: "10px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

const Book = props => {
  const { classes } = props;
  return (
    <div>
      {fakeBooksData.map(book => (
        <Card className={classes.card} key={book.id}>
          <CardMedia
            className={classes.media}
            image="https://456snt311ie943kdlv1d0ge6-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/Outliers-1080x675.jpg"
            title="Contemplative Reptile"
          />
          <CardContent> 
            <Typography gutterBottom variant="headline" component="h2">
              Book: {book.title}
            </Typography>

            <Typography gutterBottom variant="headline" component="h2">
              Author: {book.author}
            </Typography>
            <Typography
              component={props => (
                <NavLink to="/user/notifications" {...props} />
              )}
              gutterBottom
              variant="headline"
            >
              Owner: {book.owner}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Request This Book
            </Button>
            <Button size="small" color="primary">
              Link to Amazon of the book
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default withStyles(styles)(Book);
