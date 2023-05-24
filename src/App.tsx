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
  // These states variables are declared as soon as the App function gets executed
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  // Functions like these also get declared at this time
  const initializeData = async () => {
    // These functions have access to its parents variables (scope) even though they can be called at different times
    // Here we make use of setLoading, setError, setPlanets and setNextPage inside a child function. This is a closure
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

  // The same closure concept applies here
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
    // We can also make reference to nextPage, which is a variable declared on the parent's scope
    if (nextPage === null) {
      return;
    }

    // This function generates a side-effect since it's making an async API call that would change the component's state
    fetchData(nextPage);
  };

  const onPrevious = () => {
    // We can also make reference to previousPage, which is a variable declared on the parent's scope
    if (previousPage === null) {
      return;
    }

    // This also generates a side effect since it's making an async API call that would change the component's state
    fetchData(previousPage);
  };

  const handleSortByChange = (sortField: PlanetFields | "", order: Order) => {
    setPlanets(_.orderBy(planets, [sortField], [order]));
  };

  if (error) {
    return (
      <div className="text-red-500 font-bold text-center">
        An error has occurred
      </div>
    );
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
