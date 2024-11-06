import { useContext, useState } from "react";
import { DataContext, FilterAndSortContext } from "../Contexts";

export default function FilterAndSortProvider({ children }) {
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);
  const { handleFilterEndpoint } = useContext(DataContext);

  const handleFilterToggle = (category) => {
    let nextCategory = filter !== category ? category : null;
    setFilter(nextCategory);
    handleFilterEndpoint(nextCategory);
  };

  const handleSort = (type) => {
    setSort(type);
  };

  return (
    <FilterAndSortContext.Provider
      value={{ sort, filter, handleFilterToggle, handleSort }}
    >
      {children}
    </FilterAndSortContext.Provider>
  );
}
