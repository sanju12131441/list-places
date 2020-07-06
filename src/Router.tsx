import React from 'react'
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom'
import  PlacesComponent from './components/listplaces/listplaces';
import  PlaceDetailsComponent from './components/placedetails/placeDetails';
import FavouritePlacesComponent from './components/favouritePlaces/favouritePlaces';

const MainRouter = () => {
  return (
      <Router>
          <Switch>
              <Route path={ '/' } component={ PlacesComponent } exact />
              <Route path={ '/places' } component={ PlacesComponent } exact />
              <Route path={ '/places/:id' } component={ PlaceDetailsComponent } exact />
              <Route path={ '/favouritePlaces' } component={ FavouritePlacesComponent } exact />
          </Switch>
      </Router>
  )
}

export default MainRouter
