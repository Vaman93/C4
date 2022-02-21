import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataWeb } from "../Redux/Action";

export function UserWeb() {
  const webSite = useSelector((store) => store.web);
  const [dataget, setdata] = useState([]);
  const dispatche = useDispatch();
  const naviget = useNavigate();
  const dataserch = (e) => {
    if (e.key === "Enter") {
      const data = e.target.value;
      dispatche(getDataWeb(data));
      naviget("/user/Websites");
    }
  };

  const softqulityAsc = () => {
    const data = webSite.sort((a, b) => {
      return a.quality - b.quality;
    });
    setdata(data);
  };

  useEffect(() => {
    setdata(webSite);
  }, []);

  return (
    <div>
      <div id="navbar">
        <img src="" alt="" />
        <input
          className="search-box"
          type="text"
          placeholder="sreach.."
          onKeyPress={(e) => dataserch(e)}
        />
        <button className="search">search</button>
      </div>
      <div>
        <button>Sort A-Z</button>
        <button id="sort-alphabetically-desc">Sort Z-A</button>
        <button id="sort-by-date">Sort date (Asc)</button>
        <button id="sort-by-date-desc">Sort date (Desc)</button>
        <button
          id="sort-by-quality"
          onClick={() => {
            softqulityAsc();
          }}
        >
          Sort quality (Asc)
        </button>
        <button id="sort-by-quality-desc">Sort quality (desc)</button>
        <button id="filter-explicit">filter</button>
      </div>
      <div>
        {dataget.length > 1
          ? dataget.map((e) => {
              return (
                <div key={e.id} className="search-result">
                  <div>
                    <p>{e.url}</p>
                    <span>{e.title}</span> | <span>{e.author}</span>
                    <p>{e.description}</p>
                    <p>Creation Date : {e.creation_date}</p>
                    <span>Explicit : {e.explicit ? "Yes" : "No"}</span>{" "}
                    <span>Quality {e.quality} %</span>
                  </div>
                </div>
              );
            })
          : webSite.map((e) => {
              return (
                <div key={e.id} className="search-result">
                  <div>
                    <p>{e.url}</p>
                    <span>{e.title}</span> | <span>{e.author}</span>
                    <p>{e.description}</p>
                    <p>Creation Date : {e.creation_date}</p>
                    <span>Explicit : {e.explicit ? "Yes" : "No"}</span>{" "}
                    <span>Quality {e.quality} %</span>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
