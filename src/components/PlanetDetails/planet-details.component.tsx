import { useState } from "react";
import Planet from "../../models/planet";
import Button from "../Button/button.component";

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

  const [readMore, setReadMore] = useState(false);

  return (
    <div className="bg-primary p-6 text-white space-y-2 my-2">
      <h3 className="font-bold text-lg">
        {name} (diameter of {diameter} kilometers)
      </h3>
      <p>
        Its rotation period is <b>{rotation_period}</b> hours whereas its
        orbital period is <b>{orbital_period}</b> days.
      </p>
      <p>
        It has a gravity of <b>{gravity}</b> and a population of about{" "}
        <b>{population}</b>.
      </p>

      {readMore && (
        <div>
          <p>
            Climate: <b>{climate}</b>
          </p>
          <p>
            Terrain: <b>{terrain}</b>
          </p>
          <p>
            Surface water: <b>{surface_water}%</b>
          </p>
        </div>
      )}

      <Button
        classNames="text-black"
        onClick={() => setReadMore((prevState) => !prevState)}
      >
        Read {readMore ? "less" : "more"}
      </Button>
    </div>
  );
}
