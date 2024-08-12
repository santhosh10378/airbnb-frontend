import { useRef, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useSearchQuery } from "../../context/SearchQueryContext";
import { propertyTypes } from "../../data/dummy";
import { ChevronLeftIcon } from "../../assets";
import Button from "../elements/Button";

const PropertyFilters = () => {
  const {
    searchParams,
    setSearchParams,
    updateSearchQuery,
    filterSearchQuery,
  } = useSearchQuery();
  const activePropertyType = searchParams.get("propertyType");
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const onClick = (data) => {
    if (activePropertyType === data) {
      filterSearchQuery("propertyType");
      setSearchParams({});
    } else {
      updateSearchQuery({ propertyType: data });
      setSearchParams({ propertyType: data });
    }
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const updateButtonVisibility = () => {
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", updateButtonVisibility);

    // Initial check
    updateButtonVisibility();

    return () => {
      container.removeEventListener("scroll", updateButtonVisibility);
    };
  }, []);

  return (
    <div
      className={twMerge("w-full h-full relative overflow-x-hidden md:px-12")}
    >
      <div
        ref={containerRef}
        className="h-full flex items-center gap-x-5 overflow-x-auto transition-all scrollbar-hidden"
      >
        <Button
          variant="secondary-outlined"
          className={twMerge(
            "hidden md:block absolute left-0 rounded-full p-2",
            showLeftButton ? "text-secondary-800" : "text-secondary-300"
          )}
          onClick={scrollLeft}
        >
          <ChevronLeftIcon className="size-3" />
        </Button>
        <Button
          variant="secondary-outlined"
          className={twMerge(
            "hidden md:block absolute right-0 rounded-full p-2",
            showRightButton ? "text-secondary-800" : "text-secondary-300"
          )}
          onClick={scrollRight}
        >
          <ChevronLeftIcon className="size-3 rotate-180" />
        </Button>
        {propertyTypes.map((item, i) => (
          <div
            key={i}
            onClick={() => onClick(item.slug)}
            className={twMerge(
              "h-full py-3 min-w-max max-w-max border-b-2 text-xs transition cursor-pointer",
              activePropertyType === item.slug
                ? "text-secondary-900 border-gray-900 font-semibold"
                : "text-secondary-500 border-transparent"
            )}
          >
            <div className="h-full flex flex-col items-center gap-2">
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyFilters;
