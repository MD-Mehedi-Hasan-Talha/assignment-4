import { useContext, useState } from "react";
import { FilterAndSortContext } from "../../Contexts";
import { ArrowIcon } from "../Icons/ProductIcons";

export default function Sort() {
  const { handleSort } = useContext(FilterAndSortContext);
  const [sortIsOpen, setSortIsOpen] = useState(false);

  const handleOpenSort = () => {
    setSortIsOpen(!sortIsOpen);
  };

  const handleItemSort = (direction) => {
    handleSort(direction);
    handleOpenSort();
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          onClick={(e) => handleOpenSort(e)}
        >
          Sort
          <ArrowIcon />
        </button>
      </div>

      {sortIsOpen && (
        <div
          className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <span
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              tabIndex="-1"
              onClick={() => handleItemSort(null)}
            >
              Normal
            </span>
            <span
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              tabIndex="-1"
              onClick={() => handleItemSort("asc")}
            >
              Low to High
            </span>
            <span
              href=""
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              tabIndex="-1"
              onClick={() => handleItemSort("desc")}
            >
              High to Low
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
