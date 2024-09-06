import axios from "axios";
import { GIPHY_KEY } from "../constants";

export const searchGif = async (keyword: string) => {
  return axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: GIPHY_KEY,
      q: keyword,
    },
  });
};

export const getTrending = async (keyword: string) => {
  return axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: GIPHY_KEY,
      q: keyword,
    },
  });
};
