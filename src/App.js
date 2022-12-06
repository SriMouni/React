import MoviesList from './MoviesList';
import Seats from './Seats';
import AddMovie from './AddMovie';

import Header from './Header';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';
import React, { Component, useState, useEffect, useContext } from 'react';

import moviesList from './data.json';
import MoviesListContext from "./MovieListContext";


export default function App() {
  const [movies, setMoviesList] = useState(moviesList)

  return (
    <div>
      <Header />
      <MoviesListContext.Provider value={[movies ,setMoviesList] }>
        <Router>
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route exact path="/AddMovie" component={AddMovie} />
            <Route exact path="/Seats" component={Seats} />
          </Switch>
        </Router>
      </MoviesListContext.Provider>

    </div>

  );
}


