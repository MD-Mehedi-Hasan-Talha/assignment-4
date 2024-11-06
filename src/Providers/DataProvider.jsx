import { useState } from "react";
import { DataContext } from "../Contexts";
import useFetchData from "../Hooks/useFetchData";

export default function DataProvider({ children }) {
  const [filterEndpoint, setFilterEndpoint] = useState(null);

  const response = useFetchData(
    filterEndpoint ? `products/category/${filterEndpoint}` : "products"
  );

  const handleFilterEndpoint = (endpoint) => {
    setFilterEndpoint(endpoint);
  };

  return (
    <DataContext.Provider value={{ ...response, handleFilterEndpoint }}>
      {children}
    </DataContext.Provider>
  );
}
