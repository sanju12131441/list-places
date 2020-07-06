import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../card/card';
import Grid from '@material-ui/core/Grid';
import './favouritePlaces.css';

interface State {

}

interface Props {
    favouritePlacesList : []
}

class List extends Component<Props, State>{
   constructor(props) {
      super(props);
      this.state = {

      }
   }

   render() {
      if (this.props.favouritePlacesList.length === 0) {
         return (
            <div className='master-container'>
               <h3>No Favourites Found,Please Add Some Favourites</h3>
            </div>
         )
      }
      return (
         <div>
            <h2>CheckOut The List Of Places</h2>
            <div className='placesContainer'>
               <Grid container spacing={4}>
                  {
                     this.props.favouritePlacesList.length > 0 && this.props.favouritePlacesList.map((place: any) => {
                        return (
                           <Grid item xs={12} sm={6} md={3} key={place.id}>
                              <Card placeData={place}></Card>
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
   favouritePlacesList: state.ListPlacesReducer.favouritePlacesList
})

const mapDispatchtoProps = dispatch => {
   return {

   }
}

export default connect(mapStateToProps, mapDispatchtoProps)(List)