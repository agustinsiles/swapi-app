import Planet from "../../models/planet";
import Button from "../Button/button.component";

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
          <div key={planet.name}>{planet.name}</div>
        ))}
      </div>
      <div>
        {showPreviousPage && <Button onClick={onPrevious}>Previous</Button>}
        {showNextPage && <Button onClick={onNext}>Next</Button>}
      </div>
    </>
  );
}
