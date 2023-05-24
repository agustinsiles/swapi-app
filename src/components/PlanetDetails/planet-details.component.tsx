import Planet from "../../models/planet";

interface IProps {
  planet: Planet;
}

export default function PlanetDetails({ planet }: IProps) {
  const {
    name,
    diameter,
    rotation_period,
    orbital_period,
    gravity,
    population,
    climate,
    terrain,
    surface_water,
  } = planet;

  return (
    <div className="bg-primary p-6 text-white space-y-2 my-2">
      <h3 className="font-bold text-lg">
        {name} (diameter of {diameter})
      </h3>
      <p>
        Its rotation period is <b>{rotation_period}</b> whereas its orbital
        period is <b>{orbital_period}</b>.
      </p>
      <p>
        It has a gravity of {gravity} and a population of about {population}.
      </p>
      <p>Climate: {climate}</p>
      <p>Terrain: {terrain}</p>
      <p>Surface water: {surface_water}</p>
    </div>
  );
}
