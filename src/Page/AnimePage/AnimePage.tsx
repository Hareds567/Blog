import React from "react";
//Data
import { AnimeList } from "../../Data/Anime/Anime";
//Components
import AnimeListItem from "./AnimeListItem/AnimeListItem";
import AnimeFiler from "./AnimeFilter/AnimeFilter";
import AnimeFooter from "./AnimeFooter/AnimeFooter";
import AnimeInfo from "./AnimeInfo/AnimeInfo";
//CSS
import "./AnimePage.css";

const AnimePage = () => {
  const start = 0;
  const end = 18;
  const pageDifference = 18;

  const [anime, set_anime] = React.useState<any>();
  const [animeList, set_animeList] = React.useState(AnimeList);
  const [animeToRender, set_animeToRender] = React.useState(
    animeList.slice(start, end)
  );

  const setNewList = (page: number) => {
    const end = page * pageDifference;
    const start = end - pageDifference;
    set_animeToRender(animeList.slice(start, end));
  };

  return (
    <div className="AnimePage">
      <div className="test2">
        <div className="AnimePage anime-filter">
          <AnimeFiler
            animeList={animeList}
            set_animeList={set_animeList}
            animeToRender={set_animeToRender}
          />
        </div>
        <div className="test">
          <div className="AnimePage anime-list">
            {animeToRender.map((anime) => (
              <AnimeListItem
                key={anime.id}
                anime={anime}
                set_anime={set_anime}
              />
            ))}
          </div>
        </div>
        <AnimeFooter animeList={animeList} setNewList={setNewList} />
      </div>
      {anime !== undefined ? <AnimeInfo anime={anime} /> : <></>}
    </div>
  );
};

export default AnimePage;
