import React from 'react'; 
import './App.css';
import Row from "./Row"; 
import requests from './requests'
import Banner from "./Banner";
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Nav />
      {/* Banner */}
      <Banner />
     <Row title="Trending Now" fetchUrl = {requests.fetchTrending}
     isLargeRow // by Default is true
     />
     <Row title="Top Rated" fetchUrl = {requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
     <Row title="Mystery Movies" fetchUrl = {requests.fetchMystery}/>
     <Row title="Science Fiction" fetchUrl = {requests.fetchSciFi}/>
     <Row title="Western" fetchUrl = {requests.fetchWestern}/>
     <Row title="Animation" fetchUrl = {requests.fetchAnimation}/>
     <Row title="Tv" fetchUrl = {requests.fetchTV}/>
    </div>
  );
}

export default App;