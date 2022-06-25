import React, { FC } from "react";
//Data
import { Anime } from "../../../Data/Anime/Anime";
//CSS
import "./AnimeListItem.css";
//API
import { getAnimeInfo } from "../../../API/Anime/API_Anime";
interface Props {
  anime: Anime;
  set_anime: React.Dispatch<React.SetStateAction<undefined | any>>;
}
const AnimeListItem: FC<Props> = (props) => {
  const [anime, set_anime] = React.useState<any>();

  const getAnime = async () => {
    const temp = await getAnimeInfo(props.anime.id);
    set_anime(temp);
  };

  React.useEffect(() => {
    getAnime();
  }, []);

  return (
    <div className="AnimeListItem">
      <img src={anime?.attributes.posterImage.small} />
      <h1
        onClick={() => {
          props.set_anime(props.anime);
        }}
      >
        {props.anime.name}
      </h1>
      <p className="AnimeListItemSynopsis">{anime?.attributes.synopsis}</p>
      <span className="AnimeListItemAnimeStatus">{props.anime.status}</span>
    </div>
  );
};

export default AnimeListItem;
