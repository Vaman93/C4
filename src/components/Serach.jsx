import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataWeb } from "../Redux/Action";

export function Serach() {
  const dispatche = useDispatch();
  const naviget = useNavigate();
  const dataserch = (e) => {
    if (e.key === "Enter") {
      const data = e.target.value;
      dispatche(getDataWeb(data));
      naviget("/user/Websites");
    }
  };

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hdEa63454bqwZvwYIxomvF84MYKLp79Rug&usqp=CAU"
        alt=""
      />
      <input
        className="search-box"
        type="text"
        placeholder="sreach.."
        onKeyPress={(e) => dataserch(e)}
      />
    </div>
  );
}
