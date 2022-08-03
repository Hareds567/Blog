import React from "react";
//css
import "./AnimeInfo.css";

//Libraries
import { X } from "react-feather";
//Data
import { findAnimeById } from "../../../Data/Anime/Anime";
import NetflixLogo from "../../../Data/Anime/StreamingServicesIcons/NetflixLogo.png";
//API
import {
  getAnimeInfo,
  getAnimeGenres,
  getAnimeStreamingLinks,
  getAnimeStudio,
  getAnimeCharacters,
} from "../../../API/Anime/API_Anime";

import { ReactComponent as Crunchyroll } from "../../../Data/Anime/StreamingServicesIcons/Crunchyroll.svg";
import { ReactComponent as Funimation } from "../../../Data/Anime/StreamingServicesIcons/Funimation.svg";
import { ReactComponent as Hulu } from "../../../Data/Anime/StreamingServicesIcons/Hulu.svg";

import {
  AnimeInfo as AnimeData,
  AnimePageItem,
} from "../../AnimePage/AnimePage";

interface props {
  animePageItem?: AnimePageItem;
  set_animeIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  animeIsActive: boolean;
}

const AnimeInfo: React.FC<props> = ({
  animePageItem,
  set_animeIsActive,
  animeIsActive,
}) => {
  const [animeInfo, set_animeInfo] = React.useState<AnimeData>();

  const printGenres = () => {
    let result = "";
    if (animeInfo)
      for (let i = 0; i <= animeInfo.genres.length - 1; i++) {
        if (i === animeInfo.genres.length - 1) {
          result += `${animeInfo.genres[i]}.`;
          continue;
        }
        result += `${animeInfo.genres[i]}, `;
      }
    return result;
  };

  //==== Text Handlers

  const handleStatus = () => {
    if (animeInfo) {
      if (animeInfo.status === "FINISHED")
        return <div className="Finished">Finished</div>;
      if (animeInfo.status === "IN PROGRESS")
        return <div className="inProgress">In Progress</div>;
      return <>Error</>;
    }
  };

  const handleEpisodes = (episodeCount: number) => {
    if (episodeCount <= 1) return `${episodeCount} Episode`;
    if (episodeCount > 1) return `${episodeCount} Episodes`;
    return "Error";
  };

  const handleStreamingSitesIcons = (link: {
    siteName: string;
    url: string;
  }) => {
    if (link.siteName === "Crunchyroll")
      return (
        <a href={link.url} target="_blank" rel="noreferrer">
          <Crunchyroll />
        </a>
      );
    if (link.siteName === "Funimation")
      return (
        <a href={link.url} target="_blank" rel="noreferrer">
          <Funimation />
        </a>
      );
    if (link.siteName === "Hulu")
      return (
        <a href={link.url} target="_blank" rel="noreferrer">
          <Hulu />
        </a>
      );
    return (
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.siteName}
      </a>
    );
  };

  //================================================================================================
  const getStartDate = (date: string) => {
    const temp = date.split("-");
    const season = getSeason(temp[1]);
    const year = temp[0];
    const result = `${season} of ${year}`;
    return result;
  };
  const getSeason = (month: string) => {
    const temp = Number.parseInt(month);
    if (temp >= 3 && temp <= 6) return "Spring";
    if (temp >= 7 && temp <= 7) return "Summer";
    if (temp >= 8 && temp <= 11) return "Fall";
    if (temp >= 12 || temp <= 2) return "Winter";
    return temp.toString();
  };

  const getAnimeData = async (anime: AnimePageItem) => {
    const animeInfo: any = await getAnimeInfo(anime.id);
    const title: string = anime.title;
    const genres = await getAnimeGenres(anime.id);
    const links = await getAnimeStreamingLinks(anime.id);
    const studio = await getAnimeStudio(anime.id);
    const characters = await getAnimeCharacters(anime.id);
    const startDate = getStartDate(animeInfo.attributes.startDate);
    const video = `https://www.youtube.com/embed/${animeInfo.attributes.youtubeVideoId}?autoplay=1&rel=0&controls=0&modestbranding=1`;
    const coverImages = animeInfo.attributes.coverImage;
    const posterImages = animeInfo.attributes.posterImage;
    const episodeCount = handleEpisodes(animeInfo.attributes.episodeCount);
    const temp: AnimeData = {
      id: anime.id,
      title: title,
      status: anime.status,
      synopsis: animeInfo.attributes.synopsis,
      episodeCount: episodeCount,
      characters: characters,
      genres: genres,
      links: links,
      studio: studio,
      startDate: startDate,
      video: video,
      coverImages: coverImages,
      posterImages: posterImages,
    };
    return temp;
  };

  const onExit = () => {
    let test = document.getElementById("AnimePage");
    // if (test) test.style.position = "relative";
    set_animeIsActive(!animeIsActive);
  };

  const printCharacter = () => {
    if (animeInfo && animeInfo?.characters.length > 1) {
      let temp: JSX.Element[] = [];
      animeInfo.characters.forEach((character: any) => {
        temp.push(
          <div className={`animeCharacter-container`}>
            <img src={character.image.original} />
            <div>{character.name}</div>
          </div>
        );
      });
      return temp;
    } else {
      return <div> Characters are not available</div>;
    }
  };

  React.useEffect(() => {
    let test = document.getElementById("AnimePage");
    if (test) test.style.position = "fixed";
    if (animePageItem)
      getAnimeData(animePageItem).then((res) => {
        set_content_isLoading(true);
        set_animeInfo(res);
      });
  }, []);

  const [content_isLoading, set_content_isLoading] = React.useState(true);
  const [activeTab, set_activeTab] = React.useState("summary");
  const background = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (background.current) {
      console.log(document.body.scrollHeight);
      background.current.style.height = `${document.body.scrollHeight}px`;
    }
  }, [document.body.scrollHeight]);

  return (
    <>
      <div className={`AnimeInfoContainer ${!animeIsActive && "exiting"}`}>
        <div className="AnimeInfo-Container1">
          <div className="ImageOverlay"></div>
          <img
            className="AnimeInfoCoverImage"
            // onLoad={() => set_imageIsLoading(false)}

            src={animePageItem?.coverImages?.small}
          />
          <div className="AnimeInfoCloseIcon" onClick={() => onExit()}>
            <X />
          </div>
        </div>
        {/* ======================== */}
        <div className="AnimeInfo-informationContainer">
          <h1 className="AnimeInfoHeader">{animePageItem?.title}</h1>
          <div className="container-3">
            {handleStatus()}
            <div className="AnimeInfoEpisodes">{animeInfo?.episodeCount}</div>
            <div className="line"></div>
            <div>{animeInfo?.startDate}</div>
          </div>
          <div className="container-4">
            <div className="AnimeInfoGenres">
              <p>
                <span>Genres:</span> &nbsp;
                {printGenres()}
              </p>
            </div>
            {animeInfo?.studio ? (
              <div className="AnimeInfoStudio">
                <span>Studio:</span> &nbsp;{animeInfo.studio}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="container-5">
            <p className="AnimInfoSynopsis">{animePageItem?.synopsis}</p>
            {/* <div className="videoWrapper">
              <object
                className="AnimeInfoVideo"
                data={`https://www.youtube.com/embed/${props.anime.attributes.youtubeVideoId}?autoplay=1&rel=0&controls=0&modestbranding=1`}
              />
            </div> */}
          </div>
        </div>
        <div className="AnimeInfoStreamingLinks">
          <h4>Watch Online</h4>
          {animeInfo?.links.map((link) => {
            return handleStreamingSitesIcons(link);
          })}
        </div>
        <div className="animeCharacters-container">
          <div>
            <h3>Characters</h3>
          </div>
          <div className="inside-container">{printCharacter()}</div>
        </div>
      </div>
      <div
        className={`AnimeInfoContainerBackground ${
          !animeIsActive && "exiting2"
        }`}
        ref={background}
        onClick={() => {
          onExit();
        }}
      ></div>
    </>
  );
};

export default AnimeInfo;
