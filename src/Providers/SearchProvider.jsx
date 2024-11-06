import { useState } from "react";
import { SearchContext } from "../Contexts";
import useDebounce from "../Hooks/useDebounce";

export default function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleDebounce = (term) => {
    setSearchTerm(term.trim());
  };
  const term = useDebounce(handleDebounce, 750);

  const handleSearch = (value) => {
    term(value);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
