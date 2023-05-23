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

  const onScrollBottom = async () => {
    if (nextPage === null) {
      return;
    }

    const { next, results } = await getResourceData(nextPage);

    setPlanets((prevState) => [...prevState, ...results]);
    setNextPage(next);
  };

  return (
    <>
      <Filters />
      <ResultList results={planets} />
    </>
  );
}

export default App;
