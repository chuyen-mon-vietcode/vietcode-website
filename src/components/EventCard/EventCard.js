import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { navigate } from 'gatsby';

const useStyles = makeStyles({
  card: {
    "max-width": 400,
    "margin-top": 20,
    "margin-bottom": 10
  },
  media: {
    height: 400,
    width: 400
  },
});

const EventCard = ({eventContent}) => {
  const classes = useStyles();
  console.log(eventContent)
  return (
    <Card className={classes.card} id = {eventContent.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={eventContent.imageUrl}
          title={eventContent.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {eventContent.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {eventContent.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick = {() => navigate(eventContent.url)}>
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}

export default EventCard;