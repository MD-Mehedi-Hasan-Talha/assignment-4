import { useContext, useState } from "react";
import { CategoryContext, FilterAndSortContext } from "../../Contexts";
import { ArrowIcon } from "../Icons/ProductIcons";

export default function Filter() {
  const { data, loading, error } = useContext(CategoryContext);
  const { filter, handleFilterToggle } = useContext(FilterAndSortContext);

  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const handleOpenFilter = () => {
    setFilterIsOpen(!filterIsOpen);
  };

  const handleFilterChange = (item) => {
    handleFilterToggle(item);
    handleOpenFilter();
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          onClick={(e) => handleOpenFilter(e)}
        >
          Filter
          <ArrowIcon />
        </button>
      </div>

      {filterIsOpen && (
        <div
          className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="py-1" role="none">
            {loading ? (
              <div className="bg-white w-full animate-pulse flex items-center gap-2 justify-start my-1 px-4">
                <div className="bg-gray-300 w-[18px] h-[18px] rounded"></div>
                <div className="bg-gray-300 w-40 h-[18px] rounded"></div>
              </div>
            ) : error ? (
              <p className="inline-flex w-full hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                An Error Occurred.
              </p>
            ) : (
              data?.map((item, index) => (
                <label
                  key={index}
                  className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    checked={filter === item}
                    onChange={() => handleFilterChange(item)}
                  />
                  <span className="ml-2">{item}</span>
                </label>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
