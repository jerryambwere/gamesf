import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./GameDisplay.css";
import { useNavigate } from "react-router-dom";

const GameDisplay = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://movies-black-phi.vercel.app/films")
      .then((res) => res.json())
      .then((movie) => setMovie(movie))
      .catch((err) => console.log(err));
  }, []);
  const handleNavigate = (id) => {
    navigate(`/SingleGame/${id}`);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="container">
      {movie.map((film) => (
        <div className="inner" key={film.id}>
          <img src={film.poster} alt={film.title} />
          <h2>{film.title}</h2>
          <p> Time: {film.showtime}</p>
          <p> Tickets: {film.AvailableTickets}</p>
          <button
            onClick={() => handleNavigate(film.id)}
            className="learn-more"
          >
            <span aria-hidden="true" className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default GameDisplay;
