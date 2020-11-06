import React, {useState, useEffect} from 'react';
import axios from "./axios"; 
import requests from "./requests";
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState([]); 
    
    useEffect(() => {
    async function fetchData () {
        const request = await axios.get(requests.fetchTrending);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
        );
        return request; 
    }
    fetchData();
    },[])
    console.log(movie);

    function truncate (str, n) {
        return str?.length > n  ? str.substr(0, n - 1) + "..." : str; 
    }
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
            "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}
        > {/* On Header displays the bg image */}
           <div className="banner_content">
            {/* title */}
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            {/* div > 2 buttons */}
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            {/* Description */}
            <h1 className="banner_description">
               {truncate(movie?.overview, 150)}
            </h1>
           </div>
           <div className="banner_fadeBottom" />
        </header>
    )
}

export default Banner