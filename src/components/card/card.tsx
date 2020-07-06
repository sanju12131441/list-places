import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

function RecipeReviewCard(props) {
  const classes = useStyles();

  const handleView = () => {
    props.history.push({
      pathname: `/places/${props?.placeData?.id}`
    });
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.placeData.name}
        subheader={props.placeData.location}
      />
      <CardMedia
        className={classes.media}
        image={props.placeData.cover}
        title={props.placeData.name}
      />
      <CardActions disableSpacing>
        {
          props.handleFavorites && <IconButton aria-label="add to favorites" onClick={props.handleFavorites} >
            <FavoriteIcon />
          </IconButton>
        }
        <IconButton aria-label="share" onClick={e => handleView()}>
          <VisibilityIcon  />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default withRouter(RecipeReviewCard)
