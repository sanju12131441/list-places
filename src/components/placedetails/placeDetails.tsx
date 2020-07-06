import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import endPoints from '../../constants/endpoints';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Collage from '../collage/collage';
import './placeDetails.css'
import CircularProgress from '@material-ui/core/CircularProgress';

interface PlaceDetails{
   id:number
}

interface State {
   details: any
}

interface Props {
   placesList: []
   match: {
      params: {
         id: string
      }
   }
}

class List extends Component<Props, State>{
   constructor(props) {
      super(props);
      this.state = {
         details: {}
      }
   }

   componentDidMount = () => {
      this.fetchDetails(this.props?.match?.params?.id)
   }

   fetchDetails = (id) => {
      const selectedPlace = this.props.placesList.filter((places:PlaceDetails) => places.id === Number(id));

      if(selectedPlace.length > 0){
         console.log('ins',selectedPlace)
         this.setState({
            details: selectedPlace[0]
         })
      } else {
         axios.get(endPoints.GET_PLACES_DETAILS.replace('id', id)).then(res => {
            this.setState({
               details: res.data[0]
            })
         }, err => {
            console.log(err)
         })
      }
   }

   render() {
      const { details } = this.state;
      if (Object.keys(details).length === 0) {
         return (
            <div className='master-container'>
               <CircularProgress />
            </div>
         )
      }
      return (
         <Paper className='detailsContainer'>
            <h2 className='title'>{details.name}</h2>
            <Grid container>
               <Grid item xs={12} sm={6} md={6}>
                  <img className='coverPhoto' alt={details.cover} src={details.cover} />
               </Grid>
               <Grid item xs={12} sm={6} md={6} className='alignLeft'>
                  <h5 className='margin-top-0px'>Location : {details.location}</h5>
                  <h5>Latitude : {details.latitude}</h5>
                  <h5>Longitude : {details.longitude}</h5>
                  <h5>Pincode : {details.pincode}</h5>
                  <p className='description'>{details.official_description}</p>
               </Grid>
            </Grid>
            <Collage images={details.photos}></Collage>
         </Paper>
      )
   }
}

const mapStateToProps = state => ({
   placesList: state.ListPlacesReducer.placesList
})

const mapDispatchtoProps = dispatch => {
   return {

   }
}

export default connect(mapStateToProps, mapDispatchtoProps)(List)