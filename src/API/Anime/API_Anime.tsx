import axios from "axios";
import { sortByLetter } from "../../Algo/Sort";

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
      console.log(`getAnimeInfo ERROR | id: ${id}`);
    });
  return data;
};

export const getAnimeGenres = async (id: number) => {
  const finalURL = `${url}/${id}/categories`;
  let genres: string[] = [];
  let data;
  await axios
    .get(finalURL)
    .then((response: any) => {
      data = response.data.data;
      data.map((genre: any) => {
        genres.push(genre.attributes.title);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  return genres;
};

export const getAnimeStreamingLinks = async (id: number) => {
  const finalURL = `${url}/${id}/streaming-links`;
  let streamingLinks: { siteName: string; url: string }[] = [];
  let data: any[] = (await axios.get(finalURL)).data.data;
  for (const element of data) {
    const siteName = (
      await axios.get(element.relationships.streamer.links.related)
    ).data.data.attributes.siteName;
    streamingLinks.push({ siteName: siteName, url: element.attributes.url });
  }
  return streamingLinks;
};

export const getAnimeStudio = async (id: number) => {
  const finalURL = `${url}/${id}/productions`;
  let response = (await axios.get(finalURL)).data.data;
  if (response.relationships) {
    const companyUrl = response[0].relationships.company.links.related;
    let companyName = (await axios.get(companyUrl)).data.data;
    return companyName.attributes.name;
  }
  return "Studio not available";
};

export const getAnimeCharacters = async (id: number) => {
  const finalURL = `${url}/${id}/anime-characters`;
  let response = (await axios.get(finalURL)).data.data;
  let characters = [];
  for (const element of response) {
    const character = (
      await axios.get(element.relationships.character.links.related)
    ).data.data.attributes;
    characters.push(character);
  }
  return characters;
};
