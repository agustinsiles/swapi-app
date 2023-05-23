import Planet from "../../models/planet";

interface IProps {
  results: Planet[];
  sortBy?: string;
}

export default function ResultList({ results, sortBy }: IProps) {
  return (
    <div>
      {results.map((planet) => (
        <div key={planet.name}>{planet.name}</div>
      ))}
    </div>
  );
}
