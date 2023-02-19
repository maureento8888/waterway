import axios from "axios";

// https://api.reliefweb.int/v1/disasters?appname=apidoc&limit=5
const apiClient = axios.create({
  baseURL: `https://anapioficeandfire.com/api/`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default {
  getCharacterNames(pageSize, page) {
    return apiClient.get("characters?page=" + page + "&pageSize=" + pageSize);
  },
};
