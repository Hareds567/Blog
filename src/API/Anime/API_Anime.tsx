import axios from "axios";

const url = `https://kitsu.io/api/edge/anime`;

export const getAnimeInfo = async (id: number) => {
  let finalURL = `${url}/${id}`;
  let data;
  await axios
    .get(finalURL)
    .then((response: any) => {
      data = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

export const getAnimeGenres = async (id: number) => {
  let finalURL = `${url}/${id}/genres`;
  let data;
  await axios
    .get(finalURL)
    .then((response: any) => {
      data = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};
