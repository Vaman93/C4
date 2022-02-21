import axios from "axios";
import { GET_ALL_WEB, SOFT_BY_TITILEAZ } from "./ActionType";

export const getSerachWeb = (payload) => ({
  type: GET_ALL_WEB,
  payload,
});

export const softBytitileaz = (payload) => ({
  type: SOFT_BY_TITILEAZ,
  payload,
});

export const getDataWeb = (data) => (dispatch) => {
  axios
    .get(`https://fast-reef-22226.herokuapp.com/data?q=${data}`)
    .then((res) => {
      dispatch(getSerachWeb(res.data));
    });
};
