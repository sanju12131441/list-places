import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './collage.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: 'white',
      margin:'10px'
    },
    gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    },
  }),
);

export default function ImageGridList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        {props.images > 0 && props.images.map((tile,i) => (
          <Grid item xs={12} sm={6} md={6} key={i}>
            <img src={tile} alt={tile} className='imagePic'/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
