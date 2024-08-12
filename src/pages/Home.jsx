import { useLocation } from "react-router-dom";
import PropertyCard from "../components/property-card/PropertyCard";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai"; // Import a home icon from react-icons
import { useEffect } from "react";

const Home = () => {
  const { search } = useLocation();
  const { data, fetchData } = useFetch(`/properties/${search}`);

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div className="h-full space-y-5 p-4">
      {data && data.length > 0 ? (
        <section
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            xl:grid-cols-5 
            2xl:grid-cols-6 
            gap-x-6 
            gap-y-12 
            pb-20
          "
        >
          {data.map((property) => (
            <PropertyCard key={property?.id} property={property} />
          ))}
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <AiOutlineHome className="text-rose-500 text-6xl mb-4" />
          </motion.div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-3">
            No Properties Found
          </h1>
          <p className="text-base text-gray-500 mb-1">
            We couldn't find any properties matching your search.
          </p>
          <p className="text-base text-gray-500">
            Try adjusting your filters or check back later to see updated
            listings.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
