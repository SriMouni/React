import React, { Component, useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import MoviesListContext from "./MovieListContext";
import AddMovie from "./AddMovie";


function MoviesList() {

    //const [movies, setMovies] = useState(moviesList)
    const [newMovie, setNewMovie] = useState({ id: '', name: '', image: '', seats: '' });
    const [movies ,setMoviesList]= useContext(MoviesListContext);

    return (
        <div className="movieslist">
            <div>
                {movies.map((movie) => (
                    <div id={movie.id} key={movie.id} className="movies">
                        <Link to={{ pathname: '/Seats', state: movie }}>
                            <img value={movie.id} src={movie.image} />
                        </Link>
                        <p className="movie-name" >{movie.name}</p>
                    </div>
                ))}
            </div>  
            <AddMovie></AddMovie>         
        </div>

    )
}

export default MoviesList