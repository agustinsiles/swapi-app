import Planet from "../../models/planet";
import Button from "../Button/button.component";
import PlanetDetails from "../PlanetDetails/planet-details.component";

interface IProps {
  results: Planet[];
  sortBy?: string;
  showNextPage: boolean;
  showPreviousPage: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ResultList({
  results,
  sortBy,
  showNextPage,
  showPreviousPage,
  onPrevious,
  onNext,
}: IProps) {
  return (
    <>
      <div>
        {results.map((planet) => (
          <PlanetDetails key={planet.name} planet={planet} />
        ))}
      </div>
      <div className="flex justify-between my-6">
        <Button onClick={onPrevious} disabled={!showPreviousPage}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={!showNextPage}>
          Next
        </Button>
      </div>
    </>
  );
}
