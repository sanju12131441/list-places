import React, { Component } from 'react';
import { fetchPlaces } from './redux/actions';
import { connect } from 'react-redux';
import Card from '../card/card';
import Grid from '@material-ui/core/Grid';

interface State {

}

interface Props {
   fetchPlacesAction: Function,
   placesList: []
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

   render() {
      return (
         <Grid container>
            {
               this.props.placesList.length > 0 && this.props.placesList.map(place => {
                  return (
                     <Grid item xs={12} sm={6} md={3}>
                        <Card placeData={place}></Card>
                     </Grid>
                  )
               })
            }
         </Grid>
      )
   }
}

const mapStateToProps = state => ({
   placesList: state.ListPlacesReducer.placesList
})

const mapDispatchtoProps = dispatch => {
   return {
      fetchPlacesAction: () => dispatch(fetchPlaces()),
   }
}

export default connect(mapStateToProps, mapDispatchtoProps)(List)