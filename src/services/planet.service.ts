import axios from "axios";
import { API_URL } from "../constants";

export enum ResourceTypes {
  FILMS = "films",
  PEOPLE = "people",
  PLANETS = "planets",
  SPECIES = "species",
  STARSHIPS = "starships",
  VEHICLES = "vehicles",
}

type Resource = {
  [key in ResourceTypes]: string;
};

const getResourcesUrl = (): Promise<Resource> => {
  return axios.get(API_URL).then((res) => res.data);
};

export const getResourceData = (url: string) => {
  return axios.get(url).then((res) => {
    const { results, next } = res.data;

    return {
      results,
      next,
    };
  });
};

export const getResourceInitialData = async (resource: ResourceTypes) => {
  const resourcesUrl: Resource = await getResourcesUrl();
  return getResourceData(resourcesUrl[resource]);
};
