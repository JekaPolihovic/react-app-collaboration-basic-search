import React from "react";
import Data from "./../../data.json";
import { debounce } from "./../../utils/index";
import List from "../List";
import { SearchInput, SearchContainer, PreloaderText } from "./_styles";

const initialData = Data;

function App() {
  const [initialized, setInitialized] = React.useState<boolean>(false);
  const [searchText, setSearchText] = React.useState<string>("");
  const [filteredData, setFilteredData] = React.useState<string[]>(initialData);
  const [isSearching, setIsSearching] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    window.location.hash = value;
  };

  // for better searching
  const debounced: any = React.useRef(
    debounce((newValue: string) => {
      if (newValue === "") {
        setFilteredData(initialData);
        setIsSearching(false);
        return;
      }

      const regexp = new RegExp(newValue);
      const filteredData = initialData.filter((item) => {
        return regexp.test(item.toLowerCase());
      });
      setFilteredData(filteredData);
      setIsSearching(false);
    }, 500)
  );

  React.useEffect(() => {
    setIsSearching(true);
    debounced.current(searchText);
  }, [searchText]);

  React.useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      setSearchText(decodeURI(window.location.hash.slice(1).toLowerCase()));
    }
  });

  if (!initialized) {
    return null;
  }

  return (
    <div className="App">
        <SearchContainer>
            <SearchInput type="text" onInput={handleChange} defaultValue={searchText} placeholder="Search..." />
            {isSearching ? <PreloaderText>Searching.....</PreloaderText>  : <List items={filteredData} />}
        </SearchContainer>
    </div>
  );
}

export default App;
