import React from "react";
//Data
import { AnimeList, Anime } from "../../Data/Anime/Anime";
//Components
import AnimeListItem from "./AnimeListItem/AnimeListItem";
import AnimeFilter from "./AnimeFilter/AnimeFilter";
import AnimeFooter from "./AnimeFooter/AnimeFooter";
import AnimeInfo from "./AnimeInfo/AnimeInfo";
//CSS
import "./AnimePage.css";
//API
import { getAnimeInfo } from "../../API/Anime/API_Anime";
import { LocalState } from "@apollo/client/core/LocalState";

//Libraries
export interface AnimeInfo {
  id: number;
  status: string;
  title: string;
  episodeCount: string;
  synopsis: string;
  genres: string[];
  links: { siteName: string; url: string }[];
  studio: string;
  startDate: string;
  characters: any[];
  video: string;
  coverImages: any;
  posterImages: any;
}
export interface AnimePageItem {
  id: number;
  episodes: string;
  posterImages: any;
  coverImages: any;
  status: string;
  rating: number;
  title: string;
  synopsis: string;
  youtubeID: string;
}

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

const AnimePage = () => {
  const handleTitle = (titles: any) => {
    if (titles.en) return titles.en;
    if (titles.en_jp) return titles.en_jp;
    return "Error";
  };

  const setNewList = (list: Anime[]) => {
    // console.log("AnimePage- SetNewList");
    // console.log(list);
    renderAnime(list).then((res) => {
      set_animeToRender(res);
      set_isLoading(false);
      prerenderImage(res);
    });
  };

  const prerenderImage = (animeList: AnimePageItem[]) => {
    for (const anime of animeList) {
      let image = new Image();
      image.src = anime.coverImages.small;
    }
  };

  const checkIfRendered = (anime: Anime) => {
    for (const element of animeInfoArr) {
      if (element.id === anime.id) return element;
    }
    return;
  };

  const renderAnime = async (animeList: Anime[]) => {
    set_isLoading(true);
    let temp: AnimePageItem[] = [];
    let temp3: AnimePageItem[] = [];
    //List of elements that we are going to be getting data
    const temp2 = animeList;
    //Variable for Skeleton Preview Animation
    set_temp(temp2.length);
    //Get Anime data for each element being rendered
    for (const anime of temp2) {
      //Check if data has been rendered in the past
      const isValid = checkIfRendered(anime);
      if (isValid) {
        temp.push(isValid);
      } else {
        let data: any = await getAnimeInfo(anime.id);
        let temp2: AnimePageItem = {
          id: anime.id,
          rating: anime.rating,
          status: anime.status,
          posterImages: data.attributes.posterImage,
          coverImages: data.attributes.coverImage,
          title: handleTitle(data.attributes.titles),
          episodes: data.attributes.episodeCount,
          synopsis: data.attributes.synopsis,
          youtubeID: data.attributes.youtubeVideoId,
        };
        temp.push(temp2);
        temp3.push(temp2);
      }
    }

    set_animeInfoArr([...animeInfoArr, ...temp3]);
    return temp;
  };

  const renderAnimeList = () => {
    if (!isLoading) {
      return animeToRender.map((anime) => (
        <AnimeListItem
          key={anime.id}
          anime={anime}
          set_animeInfo={set_animeInfo}
          set_animeIsActive={set_animeIsActive}
        />
      ));
    }

    let a: JSX.Element[] = [];
    for (let i = 0; i < temp; i++) {
      a.push(
        <div className="isLoading">
          <div className="isLoadingImage" />
          <div className="isLoadingTitle" />
        </div>
      );
    }
    return a;
  };

  const getAnimeInfoArrFromLocalStorage = () => {
    let temp = localStorage.getItem("animeInfo");
    let animeArr: AnimePageItem[] = [];
    if (temp) {
      let animeJSON = JSON.parse(temp);
      for (const element of animeJSON) {
        const anime: AnimePageItem = {
          coverImages: element.coverImages,
          episodes: element.episodes,
          rating: element.rating,
          youtubeID: element.youtube,
          id: element.id,
          posterImages: element.posterImages,
          status: element.status,
          synopsis: element.synopsis,
          title: element.title,
        };
        animeArr.push(anime);
      }
    }
    return animeArr;
  };
  //Contains All previous fetched anime
  const [animeInfoArr, set_animeInfoArr] = React.useState<AnimePageItem[]>(
    getAnimeInfoArrFromLocalStorage()
  );
  //Contains active fetched anime data
  const [animeInfo, set_animeInfo] = React.useState<AnimePageItem>();
  //Contains ids of Anime that are going to be displayed
  const [animeList, set_animeList] = React.useState(AnimeList);
  //Contains all Anime information that is necessary to render AnimeInfo
  const [animeToRender, set_animeToRender] = React.useState<AnimePageItem[]>(
    new Array(18)
  );
  //Length of the array of items being rendered
  const [temp, set_temp] = React.useState(18);
  //Loading animation variables
  const [isLoading, set_isLoading] = React.useState(true);
  const [animeIsActive, set_animeIsActive] = React.useState(false);

  //testing
  const shouldRenderChild = useDelayUnmount(animeIsActive, 300);
  React.useEffect(() => {}, []);

  React.useEffect(() => {
    if (animeInfoArr.length > 0) {
      localStorage.setItem("animeInfo", JSON.stringify(animeInfoArr));
    }
  }, [animeInfoArr]);

  React.useEffect(() => {
    // console.log("AnimeToRender:");
    // console.log(animeToRender);
  }, [animeToRender]);

  React.useEffect(() => {
    setNewList(animeList.slice(0, 18));
  }, [animeList]);
  return (
    <>
      <div className="testing">
        <div className="AnimePage" id="AnimePage">
          <div className="test2">
            <div className="AnimePage anime-filter">
              <AnimeFilter
                set_animeList={set_animeList}
                setNewList={setNewList}
              />
            </div>
            <div className="test">
              <div className="AnimePage anime-list">{renderAnimeList()}</div>
            </div>
            <AnimeFooter animeList={animeList} setNewList={setNewList} />
          </div>
        </div>
      </div>
      {shouldRenderChild ? (
        <AnimeInfo
          animePageItem={animeInfo}
          set_animeIsActive={set_animeIsActive}
          animeIsActive={animeIsActive}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default AnimePage;
