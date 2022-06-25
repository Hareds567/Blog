import React from "react";
//Libraries
import { useNavigate } from "react-router-dom";
//CSS
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const onClick = (string: string) => {
    navigate(`./${string}`);
  };
  return (
    <div className="HomePage">
      <div className="HomePage content-container">
        <ul>
          <li className="title" onClick={() => onClick("anime")}>
            Anime
          </li>
          <li className="title" onClick={() => onClick("games")}>
            Games
          </li>
          <li className="title" onClick={() => onClick("movies")}>
            Movies
          </li>
          <li className="title" onClick={() => onClick("tvShows")}>
            TV Shows
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
