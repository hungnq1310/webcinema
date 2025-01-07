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

    return <div>My App</div>;
}

export default App;
