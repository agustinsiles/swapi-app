interface IPlanet {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}

export default class Planet {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;

  constructor(planet: IPlanet) {
    this.name = planet.name;
    this.diameter = planet.diameter;
    this.rotation_period = planet.rotation_period;
    this.orbital_period = planet.orbital_period;
    this.gravity = planet.gravity;
    this.population = planet.population;
    this.climate = planet.climate;
    this.terrain = planet.terrain;
    this.surface_water = planet.surface_water;
    this.residents = planet.residents;
    this.films = planet.films;
    this.url = planet.url;
    this.created = planet.created;
    this.edited = planet.edited;
  }
}
