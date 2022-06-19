import React from "react";
//Data
import { AnimeList } from "../../Data/Anime/Anime";
//Components
import AnimeListItem from "./AnimeListItem/AnimeListItem";
import AnimeFiler from "./AnimeFilter/AnimeFilter";
//CSS
import "./AnimePage.css";
import { SkipBack, SkipForward } from "react-feather";
const AnimePage = () => {
  const animeListLength = AnimeList.length - 1;

  const [start, set_start] = React.useState(0);
  const [end, set_end] = React.useState(18);

  const [pageStart, set_pageStart] = React.useState(1);
  const [pageEnd, set_pageEnd] = React.useState(animeListLength / 18);

  const [listToRender, set_listToRender] = React.useState(
    AnimeList.slice(start, end)
  );
  const pageDifference = 18;

  const pageLabel = () => {
    const TotalNumberOfPages = Math.ceil((AnimeList.length - 1) / 18);
    const end = pageEnd < 1 ? 1 : pageEnd;
    let result = [];
    for (let i = pageStart; i <= TotalNumberOfPages; i++) {
      result.push(
        <span
          className={`pageNumber`}
          onClick={() => {
            setNewList(i);
          }}
          key={i}
        >
          {i}
        </span>
      );
    }
    return result;
  };

  const setNewList = (page: number) => {
    console.log(AnimeList.length - 1);
    const end = page * pageDifference + 1;
    const start = end - pageDifference;
    console.log(start, end);
    set_listToRender(AnimeList.slice(start, end));
  };

  return (
    <div className="AnimePage">
      <div className="AnimePage anime-filter">
        <AnimeFiler animeList={AnimeList} set_listToRender={set_listToRender} />
      </div>
      <div className="test">
        <div className="AnimePage anime-list">
          {listToRender.map((anime) => (
            <AnimeListItem key={anime.name} anime={anime} />
          ))}
        </div>
      </div>
      <div className="AnimePage page-footer">
        <span>First</span>
        <SkipBack />
        {pageLabel()}
        <SkipForward />
        <span>Last</span>
      </div>
    </div>
  );
};

export default AnimePage;
