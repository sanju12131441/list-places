import React, { Component } from 'react';
import { fetchPlaces, addFavouritePlaces } from './redux/actions';
import { connect } from 'react-redux';
import './listplaces.css'
import Card from '../card/card';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

interface State {

}

interface Props {
   fetchPlacesAction: Function,
   placesList: [],
   addFavouritePlacesAction: Function,
   history: any
}

class List extends Component<Props, State>{
   constructor(props) {
      super(props);
      this.state = {

      }
   }

   componentDidMount = () => {
      this.props.fetchPlacesAction();
   }

   addFavouritePlacesHandler = (place) => {
      this.props.addFavouritePlacesAction(place);
      alert('Added to favourites')
   }

   viewFavouritePlacesHandler = () => {
      this.props.history.push({
         pathname: '/favouritePlaces'
      });
   }

   render() {
      if (this.props.placesList.length === 0) {
         return (
            <div className='master-container'>
               <CircularProgress />
            </div>
         )
      }
      return (
         <div>
            <h2>CheckOut The List Of Places</h2>
            <Button variant="contained" color="primary" onClick={this.viewFavouritePlacesHandler}>
               View Favourites
            </Button>
            <div className='placesContainer'>
               <Grid container spacing={4}>
                  {
                     this.props.placesList.length > 0 && this.props.placesList.map((place: any) => {
                        return (
                           <Grid item xs={12} sm={6} md={3} key={place.id}>
                              <Card placeData={place} handleFavorites={e => this.addFavouritePlacesHandler(place)}></Card>
                           </Grid>
                        )
                     })
                  }
               </Grid>
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   placesList: state.ListPlacesReducer.placesList
})

const mapDispatchtoProps = dispatch => {
   return {
      fetchPlacesAction: () => dispatch(fetchPlaces()),
      addFavouritePlacesAction: (payload) => dispatch(addFavouritePlaces(payload)),
   }
}

export default connect(mapStateToProps, mapDispatchtoProps)(List)