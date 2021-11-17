import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchApi } from "../api";

function SearchNews(props) {
  const searchArr = useSelector(state => state.news.newsList);
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("en");
  const [source, setSource] = useState("");
  const [title, setTitle] = useState("");
  const [page,setPage] = useState(1)
  function titleChange(e) {
    setTitle(e.target.value);
  }

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  function sourceChange(e) {
    setSource(e.target.value);
  }
  function selectChange(e) {
    if ((e.key = "Enter")) {
      setLang(e.target.value);
    }
  }
  function radioCLick(e) {
    setRadio(e.target.value);
  }
  function finalFunc(e) {
    searchApi
      .get(
        `everything?q=${search}&language=${lang}&page=${page}&apiKey=bacbe26a9e9c405c979c5245b7644fb9`
      )
      .then((result) => {
        // dispatch(searchNews(result.data.articles));
      });
  }
  // useEffect(() => {
  //   async function fetch() {
  //     searchApi
  //       .get(
  //         `everything?q=${search}&language=${lang}&page=${page}&apiKey=bacbe26a9e9c405c979c5245b7644fb9`
  //       )
  //       .then((result) => {
  //         dispatch(fetchMoreNews(result.data.articles));
  //       });
  //   }
  //   fetch();
  // }, [page]);
  return (
    <div className="divForm">
      <input className="forInputs" value={search} onChange={onSearchChange} />
      <select className="forSelect" onChange={selectChange} defaultValue={lang}>
        <option value="ar">ar</option>
        <option value="en">en</option>
        <option value="de">de</option>
        <option value="es">es</option>
        <option value="he">he</option>
        <option value="no">no</option>
        <option value="nl">nl</option>
        <option value="pt">pt</option>
        <option value="ud">ud</option>
      </select>
      <label htmlFor="source">Enter the source </label>
      <input
        className="forInputs"
        id="source"
        type="text"
        value={source}
        onChange={sourceChange}
      />
      <label htmlFor="title">Enter the title </label>
      <input
        className="forInputs"
        id="title"
        type="text"
        value={title}
        onChange={titleChange}
      />
      <div className="buttonDiv">
        <input
          type="radio"
          id="choice_1"
          onClick={radioCLick}
          name="sortBy"
          value="relevancy"
        />
        <label htmlFor="choice_1">relevency</label>
        <input
          type="radio"
          id="choice_2"
          onClick={radioCLick}
          name="sortBy"
          value="popularity"
        />
        <label htmlFor="choice_2">popularity</label>
        <input
          type="radio"
          id="choice_3"
          onClick={radioCLick}
          name="sortBy"
          value="publishedAt"
        />
        <label htmlFor="choice_3">publishedAt</label>
      </div>
      <button id="forClick" onClick={finalFunc}>
        Click me
      </button>
      <div>
        {searchArr.map((article, index) => {
          return (
            <div>
              <p>{article.title}</p>
              <p>{article.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SearchNews;
