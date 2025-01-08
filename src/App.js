import React from "react";
import { useEffect, useState } from "react";

import "./App.css";
import MovieCart from "./components/MovieCart";
import searchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=" + process.env.REACT_APP_API_KEY;

const App = () => {
    const [textSearch, setTextSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`); // query parameter
        const data = await response.json();
        console.log(data);
        setSearchResults(data.Search);
    }

    useEffect(() => {
        searchMovies("all");
    }, []);

    // map result to MovieCart component
    const movies = () => {
        return searchResults.map((movie, index) => {
            return <MovieCart
            key={index} 
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            />
        });
    }

    return (
        <div className="app">
            <h1>Movie App</h1>
            <div className="search">
                <input type="text" placeholder="Search for movies" onChange={
                    // () => {console.log("Changed")} // change based on each character
                    (event) => {setTextSearch(event.target.value)}
                }/>
                <img 
                    src={searchIcon}
                    alt="search"
                    onClick={() => {
                        searchMovies(textSearch);
                    }}
                ></img>
            </div>
            <div className="container">
                {(searchResults.length > 0) ? (
                    movies()
                ) : <h2>No movies found</h2>}
            </div>
        </div>
    )
}

export default App;
