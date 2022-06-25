import React from "react";
//css
import "./AnimeInfo.css";
//API
import { getAnimeGenres } from "../../../API/Anime/API_Anime";
interface props {
  anime: any;
}
const AnimeInfo: React.FC<props> = (props) => {
  const getGenres = async () => {
    const temp = getAnimeGenres(props.anime);
  };
  React.useEffect(() => {
    console.log(props.anime);
  }, []);

  return (
    <div className="AnimeInfoContainer">
      <h1>{props.anime.name}</h1>
      <p>Anime Synopsis</p>
    </div>
  );
};

export default AnimeInfo;
