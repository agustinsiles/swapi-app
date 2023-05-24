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

const getResourcesUrl = (): Promise<Resource> =>
  axios
    .get(API_URL)
    .then((res) => res.data)
    .catch(() => ({ error: true }));

export const getResourceData = (url: string) =>
  axios
    .get(url)
    .then((res) => {
      const { results, next, previous } = res.data;

      return {
        results,
        next,
        previous,
        error: false,
      };
    })
    .catch(() => ({
      error: true,
      results: null,
      next: null,
      previous: null,
    }));

export const getResourceInitialData = async (resource: ResourceTypes) => {
  const resourcesUrl: Resource = await getResourcesUrl();
  return getResourceData(resourcesUrl[resource]);
};
