import React, { FC } from "react";
//Data
import { Anime } from "../../../Data/Anime/Anime";
//CSS
import "./AnimeListItem.css";
//Libraries
import { useNavigate } from "react-router-dom";
import { AnimeInfo, AnimePageItem } from "../AnimePage";

interface Props {
  anime: AnimePageItem;
  set_animeIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  set_animeInfo: React.Dispatch<
    React.SetStateAction<AnimePageItem | undefined>
  >;
}

const AnimeListItem: FC<Props> = ({
  anime,
  set_animeIsActive,
  set_animeInfo,
}) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    set_animeInfo(anime);
    set_animeIsActive(true);
  };

  return (
    <>
      <div
        className="AnimeListItem"
        onClick={(e) => {
          onClick(e);
        }}
      >
        <img src={anime.posterImages.small} />
        <h1>{anime.title}</h1>
      </div>
    </>
  );
};

export default AnimeListItem;
