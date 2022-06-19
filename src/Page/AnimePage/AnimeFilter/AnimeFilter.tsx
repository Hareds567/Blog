import React, { FC } from "react";
//CSS
import "./AnimeFilter.css";
//Datatypes
import { Anime, AnimeList } from "../../../Data/Anime/Anime";
interface Props {
  animeList: Anime[];
  set_listToRender: React.Dispatch<React.SetStateAction<Anime[]>>;
}
const AnimeFilter: FC<Props> = (props) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const [activeLetter, set_ActiveLetter] = React.useState("");

  const letterOnClick = (e: React.MouseEvent, letter: string) => {
    e.preventDefault();
    if (letter === activeLetter) {
      set_ActiveLetter("abc");
      props.set_listToRender(AnimeList);
      return;
    }
    let animeList = props.animeList;
    const temp = animeList.filter((anime) => {
      const name = anime.name.replace(/\s/g, "").toLocaleLowerCase();
      if (name.startsWith(letter.toLocaleLowerCase())) {
        return anime;
      }
    });
    set_ActiveLetter(letter);
    props.set_listToRender(temp);
  };
  return (
    <div>
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
    </div>
  );
};

export default AnimeFilter;
