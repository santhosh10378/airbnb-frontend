import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const currentDate = new Date();

const initialSearchState = {
  location: "",
  noOfAdults: 1,
  noOfChildren: 0,
  noOfInfants: 0,
  noOfPets: 0,
  startDate: currentDate,
  endDate: new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 1
  ),
};

const initialFilterState = {
  placeType: "any",
  minPice: 840,
  maxPrice: 23000,
  minBedrooms: 1,
  minBathrooms: 1,
  minBeds: 1,
};

export const SearchQueryContext = createContext();

export const SearchQueryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState({
    ...initialFilterState,
    ...initialSearchState,
  });
  const [searchParams, setSearchParams] = useSearchParams(searchQuery);
  const [startFetching, setStartFetching] = useState(false);
  const navigate = useNavigate();

  const updateSearchQuery = (data) => {
    setSearchQuery((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const filterSearchQuery = (data) => {
    setSearchQuery((prev) => {
      delete prev[data];

      return prev;
    });
  };

  const resetFilterQuery = () => {
    setSearchQuery(initialFilterState);
  };

  const resetSearchQuery = () => {
    setSearchQuery(initialSearchState);
  };

  const updateURL = () => setStartFetching(true);

  useEffect(() => {
    if (startFetching) {
      navigate("/");
      setSearchParams(searchQuery);
      setStartFetching(false);
    }

    console.log("SearchQueryContext");
  }, [JSON.stringify(searchQuery), startFetching]);

  return (
    <SearchQueryContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        updateSearchQuery,
        startFetching,
        setStartFetching,
        resetSearchQuery,
        resetFilterQuery,
        filterSearchQuery,
        updateURL,
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </SearchQueryContext.Provider>
  );
};

export const useSearchQuery = () => {
  const context = useContext(SearchQueryContext);
  if (context === undefined) {
    throw new Error(
      "useSearchQuery must be used within an SearchQueryProvider"
    );
  }

  const {
    searchQuery,
    setSearchQuery,
    updateSearchQuery,
    startFetching,
    setStartFetching,
    resetSearchQuery,
    resetFilterQuery,
    filterSearchQuery,
    updateURL,
    searchParams,
    setSearchParams,
  } = context;

  return {
    searchQuery,
    setSearchQuery,
    updateSearchQuery,
    startFetching,
    setStartFetching,
    resetSearchQuery,
    resetFilterQuery,
    filterSearchQuery,
    updateURL,
    searchParams,
    setSearchParams,
  };
};
