import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./SingleGame.css";
import Swal from "sweetalert2";
const SingleGame = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  
  useEffect(() => {
    fetch(`https://movies-black-phi.vercel.app/films/${id}`)
      .then((res) => res.json())
      .then((game) => setGame(game))
      .catch((err) => console.log(err));
  }, [id]);
  if (!game) {
    return (
      <div>
        <svg
          class="pl"
          viewBox="0 0 160 160"
          width="160px"
          height="160px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#000"></stop>
              <stop offset="100%" stop-color="#fff"></stop>
            </linearGradient>
            <mask id="mask1">
              <rect
                x="0"
                y="0"
                width="160"
                height="160"
                fill="url(#grad)"
              ></rect>
            </mask>
            <mask id="mask2">
              <rect
                x="28"
                y="28"
                width="104"
                height="104"
                fill="url(#grad)"
              ></rect>
            </mask>
          </defs>

          <g>
            <g class="pl__ring-rotate">
              <circle
                class="pl__ring-stroke"
                cx="80"
                cy="80"
                r="72"
                fill="none"
                stroke="hsl(223,90%,55%)"
                stroke-width="16"
                stroke-dasharray="452.39 452.39"
                stroke-dashoffset="452"
                stroke-linecap="round"
                transform="rotate(-45,80,80)"
              ></circle>
            </g>
          </g>
          <g mask="url(#mask1)">
            <g class="pl__ring-rotate">
              <circle
                class="pl__ring-stroke"
                cx="80"
                cy="80"
                r="72"
                fill="none"
                stroke="hsl(193,90%,55%)"
                stroke-width="16"
                stroke-dasharray="452.39 452.39"
                stroke-dashoffset="452"
                stroke-linecap="round"
                transform="rotate(-45,80,80)"
              ></circle>
            </g>
          </g>

          <g>
            <g
              stroke-width="4"
              stroke-dasharray="12 12"
              stroke-dashoffset="12"
              stroke-linecap="round"
              transform="translate(80,80)"
            >
              <polyline
                class="pl__tick"
                stroke="hsl(223,10%,90%)"
                points="0,2 0,14"
                transform="rotate(-135,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,10%,90%)"
                points="0,2 0,14"
                transform="rotate(-90,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,10%,90%)"
                points="0,2 0,14"
                transform="rotate(-45,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,10%,90%)"
                points="0,2 0,14"
                transform="rotate(0,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,10%,90%)"
                points="0,2 0,14"
                transform="rotate(45,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,10%,90%)"
                points="0,2 0,14"
                transform="rotate(90,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,10%,90%)"
                points="0,2 0,14"
                transform="rotate(135,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,10%,90%)"
                points="0,2 0,14"
                transform="rotate(180,0,0) translate(0,40)"
              ></polyline>
            </g>
          </g>
          <g mask="url(#mask1)">
            <g
              stroke-width="4"
              stroke-dasharray="12 12"
              stroke-dashoffset="12"
              stroke-linecap="round"
              transform="translate(80,80)"
            >
              <polyline
                class="pl__tick"
                stroke="hsl(223,90%,80%)"
                points="0,2 0,14"
                transform="rotate(-135,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,90%,80%)"
                points="0,2 0,14"
                transform="rotate(-90,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,90%,80%)"
                points="0,2 0,14"
                transform="rotate(-45,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,90%,80%)"
                points="0,2 0,14"
                transform="rotate(0,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,90%,80%)"
                points="0,2 0,14"
                transform="rotate(45,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,90%,80%)"
                points="0,2 0,14"
                transform="rotate(90,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,90%,80%)"
                points="0,2 0,14"
                transform="rotate(135,0,0) translate(0,40)"
              ></polyline>
              <polyline
                class="pl__tick"
                stroke="hsl(223,90%,80%)"
                points="0,2 0,14"
                transform="rotate(180,0,0) translate(0,40)"
              ></polyline>
            </g>
          </g>

          <g>
            <g transform="translate(64,28)">
              <g class="pl__arrows" transform="rotate(45,16,52)">
                <path
                  fill="hsl(3,90%,55%)"
                  d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"
                ></path>
                <path
                  fill="hsl(223,10%,90%)"
                  d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"
                ></path>
              </g>
            </g>
          </g>
          <g mask="url(#mask2)">
            <g transform="translate(64,28)">
              <g class="pl__arrows" transform="rotate(45,16,52)">
                <path
                  fill="hsl(333,90%,55%)"
                  d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"
                ></path>
                <path
                  fill="hsl(223,90%,80%)"
                  d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }

  const availableTickets = game.capacity - game.tickets_sold;
  function handleDelete() {
    fetch(`https://movies-black-phi.vercel.app/films/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    Swal.fire({
      position: "centre",
      icon: "success",
      title: "Movie Deleted",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  function handleTicket() {
    if (game.tickets_sold >= game.capacity) {
      Swal.fire({
        icon: 'error',
        title: 'No tickets available',
        text: 'Sorry, this movie is sold out!',
      });
      return;
    }
    fetch(`https://movies-black-phi.vercel.app/films/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tickets_sold: game.tickets_sold + 1 }),
    })
      .then((res) => {
         res.json();
      })
      .then((data) => {
        setGame((prevGame) => ({
          ...prevGame,
          tickets_sold: prevGame.tickets_sold + 1,
        }));
        Swal.fire({
          icon: 'success',
          title: 'Ticket Purchased',
          text: `You have successfully purchased a ticket for ${game.title}`,
        });
      })
      .catch((err) => {
        console.error("Error purchasing ticket:", err);
        Swal.fire({
          icon: 'error',
          title: 'Purchase Failed',
          text: `There was an error purchasing the ticket: ${err.message}`,
        });
      });
  }
  
  
  return (
    <div>
      <div key={game.id}>
        <h2>{game.title}</h2>
        <img src={game.poster} alt={game.title} />
        <h1> Title: {game.title}</h1>
        <p>Time: {game.showtime}</p>
        <p>Description: {game.description}</p>
        <p>Duration: {game.runtime}</p>
        <p> AvailableTickets:{availableTickets}</p>
        <div className="btns">
          <button onClick={handleTicket} class="ui-btn1">ticket?</button>
          <button class="ui-btn2">wishlist</button>

          <button onClick={handleDelete} class="ui-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
