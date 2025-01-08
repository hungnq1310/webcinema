import React from "react";

const MovieCart = ({ title, year, poster }) => {
    return (
        <div className="movie">
            <div>
                <p>{year}</p>
            </div>
            <div>
                <img src={poster === "N/A" ? "https://via.placeholder.com/400" : poster} alt="movie"></img>
            </div>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{year}</span>
            </div>
        </div>
    )
}

export default MovieCart;