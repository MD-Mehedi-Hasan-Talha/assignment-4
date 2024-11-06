import { useContext } from "react";
import {
  DataContext,
  FilterAndSortContext,
  SearchContext,
} from "../../../Contexts";
import EmptyCard from "./EmptyCard";
import ErrorCard from "./ErrorCard";
import LoadingCard from "./LoadingCard";
import SingleCard from "./SingleCard";

export default function Cards() {
  const { data, loading, error } = useContext(DataContext);
  const { sort } = useContext(FilterAndSortContext);
  const { searchTerm } = useContext(SearchContext);

  let searchFilteredData = data.filter(
    (item) =>
      searchTerm.length === 0 ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = searchFilteredData
    .slice()
    .sort((a, b) =>
      sort === "asc" ? a.price - b.price : sort === "desc" && b.price - a.price
    );

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loading ? (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            ) : error ? (
              <ErrorCard />
            ) : sortedData.length < 1 ? (
              <EmptyCard />
            ) : (
              sortedData?.map((item) => (
                <SingleCard key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
