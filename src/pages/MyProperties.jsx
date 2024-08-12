import PropertyCard from "../components/property-card/PropertyCard";
import { useAuth } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai"; // Import a home icon from react-icons

const MyProperties = () => {
  const { user } = useAuth();
  const { data: properties, fetchData } = useFetch(
    `/properties?hostId=${user?.id}`
  );

  return (
    <div className="h-full space-y-5 p-4">
      {properties && properties.length > 0 ? (
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
          {properties.map((property) => (
            <PropertyCard
              key={property?.id}
              property={property}
              myProperty
              fetchData={fetchData}
            />
          ))}
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <AiOutlineHome className="text-pink-600 text-6xl mb-4" />
          </motion.div>

          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            No Properties Found
          </h1>
          <p className="text-lg text-gray-500">
            It looks like you haven't added any properties yet. Start adding
            your listings to showcase them here!
          </p>
        </div>
      )}
    </div>
  );
};

export default MyProperties;
