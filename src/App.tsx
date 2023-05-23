import "./App.css";
import Filters from "./components/Filters/filters.component";
import ResultList from "./components/ResultList/result-list.component";
import Search from "./components/Search/search.component";

function App() {
  return (
    <>
      <Search />
      <Filters />
      <ResultList />
    </>
  );
}

export default App;
