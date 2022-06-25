import React, { FC } from "react";
//CSS
import "./AnimeFilter.css";
//Datatypes
import { Anime, AnimeList } from "../../../Data/Anime/Anime";
//Libraries
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

//Components
import AnimeSearch from "./AnimeSearch/AnimeSearch";

interface Props {
  animeList: Anime[];
  set_animeList: React.Dispatch<React.SetStateAction<Anime[]>>;
  animeToRender: React.Dispatch<React.SetStateAction<Anime[]>>;
}
const AnimeFilter: FC<Props> = (props) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const navigate = useNavigate();
  const [searchParams, set_searchParams] = useSearchParams();
  const [activeLetter, set_ActiveLetter] = React.useState("");

  //Functions
  // -  Handles Letter on Click
  const letterOnClick = (e: React.MouseEvent, letter: string) => {
    e.preventDefault();
    //If letter is active
    if (letter === activeLetter) {
      set_ActiveLetter("abc");
      props.set_animeList(AnimeList);
      props.animeToRender(AnimeList.slice(0, 18));
      set_searchParams({ page: "1" });
      return;
    }
    //Search for Anime with letter x using OG list
    let animeList = AnimeList;
    const temp = animeList.filter((anime) => {
      const name = anime.name.replace(/\s/g, "").toLocaleLowerCase();
      if (name.startsWith(letter.toLocaleLowerCase())) {
        return anime;
      }
    });

    set_ActiveLetter(letter);
    props.set_animeList(temp);
    props.animeToRender(temp);
    const param = createSearchParams({ letter: letter });
    set_searchParams(param);
  };

  return (
    <div className="AnimeFilterContainer">
      <div className="sortByLetter">
        {alphabet.split("").map((letter) => (
          <span
            key={letter}
            className={`letter ${
              activeLetter === letter ? "letter_active" : ""
            }`}
            onClick={(e) => letterOnClick(e, letter)}
          >
            {letter.toLocaleUpperCase()}
          </span>
        ))}
      </div>
      <AnimeSearch
        set_animeList={props.set_animeList}
        animeToRender={props.animeToRender}
      />
    </div>
  );
};

export default AnimeFilter;
