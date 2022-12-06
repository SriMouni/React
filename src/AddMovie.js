import moviesList from './data.json';
import React, { Component, useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import MoviesListContext from "./MovieListContext";


function AddMovie() {
    const [movies ,setMoviesList]= useContext(MoviesListContext);
    const [newMovie, setNewMovie] = useState({ id: '', name: '', image: '', seats: '' });
   
    const handleChange = (event) => {
        setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
    };


    const addMovie = async (event) => {
        event.preventDefault();
        const newMoviesList = [...movies];
        let id = newMoviesList.length;
        newMovie.id = id + 1
        newMoviesList.push(newMovie);
        setMoviesList(newMoviesList);
        console.log(movies);
       
    }
    
    return (
        <div className="movieslist">
            <h1>Add Movie</h1>
            <form onSubmit={addMovie}>
                <label> Movie Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <label> Image URL:
                    <input type="text" name="image" onChange={handleChange} />
                </label>
                <label> Seats:
                    <input type="text" name="seats" onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default AddMovie