import React, { FC } from "react";
//CSS
import "./AnimeFilter.css";
//Datatypes
import { Anime, AnimeList } from "../../../Data/Anime/Anime";
import { sortByLetter } from "../../../Algo/Sort";
//Libraries
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
  useLocation,
} from "react-router-dom";

//Components
import AnimeSearch from "./AnimeSearch/AnimeSearch";

interface Props {
  set_animeList: React.Dispatch<React.SetStateAction<Anime[]>>;
  setNewList: (list: Anime[]) => void;
}
const AnimeFilter: FC<Props> = (props) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const navigate = useNavigate();
  const [searchParams, set_searchParams] = useSearchParams();
  const [activeLetter, set_ActiveLetter] = React.useState("");
  const location = useLocation();

  //Functions
  // -  Handles Letter on Click
  const letterOnClick = (letter: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    //If letter is active
    if (letter === activeLetter) {
      set_ActiveLetter("");
      props.set_animeList(AnimeList);
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
    const test = temp.sort((a, b) => {
      return sortByLetter(a.name, b.name);
    });

    set_ActiveLetter(letter);
    // console.log("Temp from Filter");
    // console.log(temp);
    props.set_animeList(temp);
    // props.animeToRender(temp);
    const param = createSearchParams({ letter: letter });
    set_searchParams(param);
  };

  React.useEffect(() => {
    let temp = location.search.split("=");
    if (temp[0] === "?letter") {
      letterOnClick(temp[1]);
    }
  }, []);
  return (
    <div className="AnimeFilterContainer">
      <div className="sortByLetter">
        {alphabet.split("").map((letter) => (
          <span
            key={letter}
            className={`letter ${
              activeLetter === letter ? "letter_active" : ""
            }`}
            onClick={(e) => letterOnClick(letter, e)}
          >
            {letter.toLocaleUpperCase()}
          </span>
        ))}
      </div>
      <AnimeSearch set_animeList={props.set_animeList} />
    </div>
  );
};

export default AnimeFilter;
