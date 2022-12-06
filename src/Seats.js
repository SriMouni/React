import React, { Component , useState } from 'react';
import { useHistory } from "react-router-dom";

function Seats(props) {
    const [movie, setMovie] = useState(props.location.state);
    let list = [];
    for (var i = 1; i <= movie.seats; i++) {
        list.push(
            <div className="seats" id={i}>
                <span>{i}</span>
            </div>
        )
    }
    return (
        <div className="movie-name" >
            <img value={movie.id} src={movie.image} />
            <p className="movie-name" >{movie.name}</p>
            <div className='seat-layout'>
                {list}
            </div>
        </div>

    )
}

export default Seats;