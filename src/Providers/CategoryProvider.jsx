import { CategoryContext } from "../Contexts";
import useFetchData from "../Hooks/useFetchData";

export default function FilterProvider({ children }) {
  const response = useFetchData("products/categories");

  return (
    <CategoryContext.Provider value={response}>
      {children}
    </CategoryContext.Provider>
  );
}
