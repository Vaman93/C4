import { GET_ALL_WEB, SOFT_BY_TITILEAZ } from "./ActionType";

const init = {
  web: [],
};

export const Webreducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_ALL_WEB:
      return { ...store, web: payload };

    case SOFT_BY_TITILEAZ:
      return { ...store, web: payload };

    default:
      return { ...store };
  }
};
