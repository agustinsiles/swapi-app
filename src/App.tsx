import { useState, useEffect } from "react";
import "./App.css";
import Filters from "./components/Filters/filters.component";
import ResultList from "./components/ResultList/result-list.component";
import Planet from "./models/planet";
import {
  ResourceTypes,
  getResourceData,
  getResourceInitialData,
} from "./services/planet.service";

function App() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  const initializeData = async () => {
    const { next, results } = await getResourceInitialData(
      ResourceTypes.PLANETS
    );

    setPlanets(results);
    setNextPage(next);
  };

  useEffect(() => {
    initializeData();
  }, []);

  const fetchData = async (url: string) => {
    const { previous, results, next } = await getResourceData(url);
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

  return (
    <>
      <Filters />
      <ResultList
        results={planets}
        showNextPage={nextPage !== null}
        showPreviousPage={previousPage !== null}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </>
  );
}

export default App;
