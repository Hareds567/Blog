import React from "react";
//CSS
import "./AnimeSearch.css";
//Data
import { AnimeList, Anime } from "../../../../Data/Anime/Anime";
//Libraries
import { Search, X } from "react-feather";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

interface Props {
  set_animeList: React.Dispatch<React.SetStateAction<Anime[]>>;
  animeToRender: React.Dispatch<React.SetStateAction<Anime[]>>;
}
const AnimeSearch: React.FC<Props> = (props) => {
  const [input, set_input] = React.useState("");
  const [isActive, set_isActive] = React.useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const newInput = input.trim().replaceAll(" ", "").toLocaleLowerCase();
    let temp = AnimeList.filter((anime) => {
      if (
        anime.name
          .replaceAll(" ", "")
          .replaceAll(/[^a-zA-Z ]/g, "")
          .toLocaleLowerCase()
          .includes(newInput)
      )
        return anime;
      return;
    });
    props.set_animeList(temp);
    props.animeToRender(temp.slice(0, 18));
    if (input.length > 0) {
      const params = createSearchParams({ search: input });
      setSearchParams(params);
    } else {
    }
  }, [input]);

  const xOnclick = (e: React.MouseEvent) => {
    e.preventDefault();
    set_input("");
    set_isActive(false);
  };
  return (
    <div
      className={`AnimeSearchContainer ${isActive ? "active" : ""}`}
      onBlur={() => {
        if (input.length === 0) {
          set_isActive(false);
        }
      }}
    >
      <Search
        size={"20px"}
        onClick={() => {
          set_isActive(true);
          document.getElementById("AnimeSearchInput")?.focus();
        }}
      />
      <input
        id="AnimeSearchInput"
        className={`AnimeSearchInput ${isActive ? "activeInput" : ""}`}
        type="text"
        value={input}
        onChange={(e) => set_input(e.currentTarget.value)}
      />
      {input.length > 0 ? <X onClick={(e) => xOnclick(e)} /> : <></>}
    </div>
  );
};

export default AnimeSearch;
