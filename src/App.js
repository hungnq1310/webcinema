import React from "react";
import { useEffect } from "react";

import "./App.css";
import searchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=" + process.env.REACT_APP_API_KEY;

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`); // query parameter
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        searchMovies("Batman");
    }, []);

    return (
        <div className="app">
            <h1>Movie App</h1>
            <div className="search">
                <input type="text" placeholder="Search for movies" onChange={
                    // () => {console.log("Changed")} // change based on each character
                    () => {}
                }/>
                <img 
                    src={searchIcon}
                    alt="search"
                    onClick={() => {console.log("Clicked")}}
                ></img>
                
            </div>
            <div className="container">
                <div className="movie">
                    <img src="https://via.placeholder.com/150" alt="movie"></img>
                    <div className="movie-info">
                        <h3>Movie Title</h3>
                        <span>Movie Year</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
