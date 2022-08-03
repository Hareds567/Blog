import React, { FC } from "react";
//CSS
import "./AnimeFooter.css";
//libraries
import { SkipBack, SkipForward } from "react-feather";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
  useLocation,
} from "react-router-dom";
//Data
import { Anime } from "../../../Data/Anime/Anime";
interface Props {
  animeList: Anime[];
  setNewList: (list: Anime[]) => void;
}
const AnimeFooter: FC<Props> = (props) => {
  const lastPageNumber = Math.ceil(props.animeList.length / 18);
  //Router
  const [searchParams, set_searchParams] = useSearchParams();
  const location = useLocation();
  //States
  const [activePage, set_activePage] = React.useState<number>(1);

  const pageDifference = 18;

  //Functions
  // -
  const setNewList = (page: number) => {
    const end = page * pageDifference;
    const start = end - pageDifference;
    const list = props.animeList.slice(start, end);
    console.log("hello");
    props.setNewList(list);
  };

  // - Handle End label
  const handleEndLabel = (start: number, lastPageNumber: number) => {
    if (start === lastPageNumber) return start;
    if (lastPageNumber - start > 5) return start + 4;
    return lastPageNumber;
  };

  // - handle label
  const handleLabel2 = (page: number) => {
    let newLabelEnd = page + 2;
    let newLabelStart = page - 2;

    if (newLabelEnd >= lastPageNumber) newLabelEnd = lastPageNumber;
    if (newLabelStart <= 1) newLabelStart = 1;

    set_labelStart(newLabelStart);
    set_labelEnd(newLabelEnd);
    set_activePage(page);
  };

  // - Handles label onClick
  const handleLabelOnClick = (page: number) => {
    let newLabelEnd = page + 2;
    let newLabelStart = page - 2;

    if (newLabelEnd >= lastPageNumber) newLabelEnd = lastPageNumber;
    if (newLabelStart <= 1) newLabelStart = 1;

    set_labelStart(newLabelStart);
    set_labelEnd(newLabelEnd);
    set_activePage(page);
    setNewList(page);

    const params = createSearchParams({ page: page.toString() });
    set_searchParams(params);
  };
  // - Go to FIrst Page
  const goToFirstPage = () => {
    set_activePage(1);
    setNewList(1);
    handleLabelOnClick(1);
  };
  // - Go to Last Page
  const goToLastPage = () => {
    set_activePage(lastPageNumber);
    setNewList(lastPageNumber);
    handleLabelOnClick(lastPageNumber);
  };
  // - Go to Previous || Next Page
  const onNextPage = (num: number) => {
    let nextActivePage = activePage + num;
    if (num > 0) {
      nextActivePage =
        nextActivePage >= lastPageNumber ? lastPageNumber : nextActivePage;
    }
    if (num < 0) {
      nextActivePage = nextActivePage < 1 ? 1 : nextActivePage;
    }
    handleLabelOnClick(nextActivePage);
    set_activePage(nextActivePage);
    const params = createSearchParams({ page: nextActivePage.toString() });
    set_searchParams(params);
  };

  //Page
  const [labelStart, set_labelStart] = React.useState(1);
  const [labelEnd, set_labelEnd] = React.useState(
    handleEndLabel(labelStart, lastPageNumber)
  );

  // - Handles changes in the URL
  React.useEffect(() => {
    const searchParam = location.search.split("=");
    if (searchParam[0]) {
      if (searchParam[0] === "?letter") {
        handleLabel2(1);
      }
      if (searchParam[0] === "?page") {
        handleLabel2(Number.parseInt(searchParam[1]));
      }
      if (searchParam[0] === "?search") {
        handleLabel2(1);
      }
    } else {
      const params = createSearchParams({ page: "1" });
      set_searchParams(params);
    }
  }, [location]);

  // - prints page labels
  const pageLabel = () => {
    let result = [];
    for (let i = labelStart; i <= labelEnd; i++) {
      result.push(
        <span
          className={`pageNumber ${
            activePage === i ? "pageNumber_active" : ""
          }`}
          onClick={() => {
            handleLabelOnClick(i);
          }}
          key={i}
        >
          {i}
        </span>
      );
    }
    return result;
  };

  //Render
  return (
    <div className="AnimePage page-footer">
      <span
        className="pageFooter-goToFirstPage"
        onClick={() => goToFirstPage()}
      >
        First
      </span>
      <div className="pageFooter-skipButton">
        <SkipBack onClick={() => onNextPage(-1)} />
      </div>
      {pageLabel()}
      <div className="pageFooter-skipButton">
        <SkipForward onClick={() => onNextPage(1)} />
      </div>
      <span className="pageFooter-goToLastPage" onClick={() => goToLastPage()}>
        Last
      </span>
    </div>
  );
};

export default AnimeFooter;
