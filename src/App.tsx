import _ from "lodash";
import { useState, useEffect } from "react";
import Filters, { Order } from "./components/Filters/filters.component";
import ResultList from "./components/ResultList/result-list.component";
import Planet, { PlanetFields } from "./models/planet";
import {
  ResourceTypes,
  getResourceData,
  getResourceInitialData,
} from "./services/resource.service";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  const initializeData = async () => {
    setLoading(true);

    const { error, results, next } = await getResourceInitialData(
      ResourceTypes.PLANETS
    );

    setLoading(false);

    if (error) {
      setError(true);
      return;
    }

    setPlanets(results);
    setNextPage(next);
  };

  useEffect(() => {
    initializeData();
  }, []);

  const fetchData = async (url: string) => {
    setLoading(true);

    const { previous, results, next, error } = await getResourceData(url);

    setLoading(false);

    if (error) {
      setError(true);
      return;
    }

    setPlanets(results);
    setPreviousPage(previous);
    setNextPage(next);
  };

  const onNext = () => {
    if (nextPage === null) {
      return;
    }

    fetchData(nextPage);
  };

  const onPrevious = () => {
    if (previousPage === null) {
      return;
    }

    fetchData(previousPage);
  };

  const handleSortByChange = (sortField: PlanetFields | "", order: Order) => {
    setPlanets(_.orderBy(planets, [sortField], [order]));
  };

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="w-1/2 m-auto">
      <Filters onSortByChange={handleSortByChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ResultList
          results={planets}
          showNextPage={nextPage !== null}
          showPreviousPage={previousPage !== null}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}
    </div>
  );
}

export default App;
